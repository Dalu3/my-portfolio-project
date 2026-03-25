import React, { useEffect, useState } from "react";

const CONSENT_KEY = "cookie-consent";

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY);
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setIsVisible(false);

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: value === "accepted" ? "granted" : "denied",
      });
    }

    window.dispatchEvent(
      new CustomEvent("cookie-consent-updated", {
        detail: { consent: value },
      })
    );
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-banner-text">
        We use cookies for analytics to improve your experience on this site.
      </p>
      <div className="cookie-banner-actions">
        <button
          type="button"
          className="cookie-banner-button cookie-banner-button-secondary"
          onClick={() => handleConsent("declined")}
        >
          Decline
        </button>
        <button
          type="button"
          className="cookie-banner-button cookie-banner-button-primary"
          onClick={() => handleConsent("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
