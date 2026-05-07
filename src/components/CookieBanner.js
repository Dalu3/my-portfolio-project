import React, { useEffect, useState } from "react";
import {
  applyConsent,
  CONSENT_ACCEPTED,
  CONSENT_REJECTED,
  getStoredConsent,
  setStoredConsent,
} from "../utils/consent";

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = getStoredConsent();

    if (savedConsent) {
      applyConsent(savedConsent);
      return;
    }

    applyConsent(null);

    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value) => {
    setStoredConsent(value);
    applyConsent(value);
    setIsVisible(false);

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
          onClick={() => handleConsent(CONSENT_REJECTED)}
        >
          Reject
        </button>
        <button
          type="button"
          className="cookie-banner-button cookie-banner-button-primary"
          onClick={() => handleConsent(CONSENT_ACCEPTED)}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
