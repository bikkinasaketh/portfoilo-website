import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

emailjs.send(
  "service_88naqtr",
  "template_zg9w6re",
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  "z-qGVFkKxDWhW2k7I"
)

.then(
  (result) => {
    alert("✅ Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  },
  (error) => {
    alert("❌ Failed to send message. Try again.");
    console.error(error.text);
  }
);
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
