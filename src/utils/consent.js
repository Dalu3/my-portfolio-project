export const CONSENT_KEY = "cookie-consent";
export const CONSENT_ACCEPTED = "accepted";
export const CONSENT_REJECTED = "rejected";
export const GA_MEASUREMENT_ID = "G-HZDSBSC4T7";

const GA_SCRIPT_ID = "ga-script";

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

function getCookieDomains() {
  const { hostname } = window.location;

  if (!hostname || hostname === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return [hostname];
  }

  const parts = hostname.split(".");

  if (parts.length < 2) {
    return [hostname];
  }

  return [hostname, parts.slice(-2).join(".")];
}

function expireCookie(name, domain) {
  const base = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  document.cookie = base;

  if (domain) {
    document.cookie = `${base}; domain=${domain}`;
    document.cookie = `${base}; domain=.${domain}`;
  }
}

export function getStoredConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch (error) {
    return null;
  }
}

export function setStoredConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch (error) {
    return;
  }
}

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") {
    return;
  }

  const measurementCookie = `_ga_${GA_MEASUREMENT_ID.replace("G-", "")}`;
  const cookieNames = ["_ga", "_gid", "_gat", measurementCookie];
  const domains = getCookieDomains();

  cookieNames.forEach((cookieName) => {
    expireCookie(cookieName);
    domains.forEach((domain) => expireCookie(cookieName, domain));
  });
}

export function denyTracking() {
  ensureGtagStub();

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function loadGoogleAnalytics() {
  ensureGtagStub();

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function applyConsent(consent) {
  if (consent === CONSENT_ACCEPTED) {
    loadGoogleAnalytics();
    return;
  }

  denyTracking();
  clearAnalyticsCookies();
}
