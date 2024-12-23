import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Title() {
  const [showForm, setShowForm] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState(""); 
  const [notificationType, setNotificationType] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2nd0eb8", 
        "template_78ai7du", 
        formData,
        "OTcxOIk9MP9dFnPQG" 
      )
      .then(
        (response) => {
          setNotification("Thank you for your message, I will be in touch as soon as possible!");
          setNotificationType("success");
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
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
