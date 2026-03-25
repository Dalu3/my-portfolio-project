import React, { useState } from "react";
import emailjs from "emailjs-com";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validateField = (field, value) => {
  const trimmedValue = value.trim();

  if (field === "name") {
    return trimmedValue ? "" : "Please enter your name.";
  }

  if (field === "email") {
    if (!trimmedValue) {
      return "Please enter your email.";
    }

    return emailPattern.test(trimmedValue)
      ? ""
      : "Please enter a valid email address.";
  }

  if (field === "message") {
    return trimmedValue ? "" : "Please add a short message.";
  }

  return "";
};

const validateForm = (data) => {
  const nextErrors = {};

  Object.keys(data).forEach((field) => {
    const fieldError = validateField(field, data[field]);
    if (fieldError) {
      nextErrors[field] = fieldError;
    }
  });

  return nextErrors;
};

export default function Title() {
  const [showForm, setShowForm] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(""); 
  const [notificationType, setNotificationType] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({ ...previous, [name]: value }));

    setErrors((previous) => {
      if (!previous[name]) {
        return previous;
      }

      const currentFieldError = validateField(name, value);
      if (currentFieldError) {
        return { ...previous, [name]: currentFieldError };
      }

      const updatedErrors = { ...previous };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    emailjs
      .send(
        "service_2nd0eb8", 
        "template_78ai7du", 
        formData,
        "OTcxOIk9MP9dFnPQG" 
      )
      .then(
        (response) => {
          setNotification("Thank you!  I’ve received your message and will contact you as soon as possible.");
          setNotificationType("success");
          setErrors({});
          setShowForm(false); 
          setFormData({ name: "", email: "", message: "" }); 
          setTimeout(() => setNotification(""), 3000); 
        },
        (error) => {
          setNotification(
            "Oh, it looks like you're having trouble sending your message. You can send it to daria.lysunets03@gmail.com directly :)"
          );
          setNotificationType("error");
          setTimeout(() => setNotification(""), 3000); 
        }
      );
  };

  return (
    <div className="title-main-div">
      <p className="title-greeting">Hi, my name is</p>
      <h1 className="title-name">Daria Lysunets.</h1>
      <h2 className="title-subheader">I build things for the web.</h2>
      <p className="title-paragraph">
        I am a front-end web developer specialising in building (and sometimes
        designing) exceptional digital experiences. I enjoy making user
        interfaces understandable and turning ideas into functional, visually
        appealing websites.
      </p>

      <button className="title-button" onClick={() => setShowForm(true)}>
        Get In Touch
      </button>

      <div className="vertical-text">daria.lysunets03@gmail.com</div>

      {showForm && (
        <div className="form-modal">
          <div className="form-content">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`form-input ${errors.name ? "form-input-error" : ""}`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "title-name-error" : undefined}
                />
                {errors.name && (
                  <p id="title-name-error" className="form-field-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`form-input ${errors.email ? "form-input-error" : ""}`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "title-email-error" : undefined}
                />
                {errors.email && (
                  <p id="title-email-error" className="form-field-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`form-textarea ${errors.message ? "form-input-error" : ""}`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "title-message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <p id="title-message-error" className="form-field-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="form-submit-button">
                Submit
              </button>
            </form>
            <button
              className="form-close-button"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {notification && (
        <div className={`notification ${notificationType}`}>
          {notification}
        </div>
      )}
    
    </div>
    
  );
}
