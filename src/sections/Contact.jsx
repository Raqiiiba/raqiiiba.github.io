import React, { useState } from 'react';
import '../styles/sections.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:issahakuraqiiba98@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
  };

  return (
    <section id="contact" className="Contact">
      <h2 className="Contact__title">Get In Touch</h2>
      <form className="Contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
          placeholder="Your Name"
          required
          className="Contact__input"
        />
        <input
          type="email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="Your Email"
          required
          className="Contact__input"
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={formData.message}
          placeholder="Your Message"
          rows="3"
          required
          
          className="Contact__textarea"
        />
        <button type="submit" className="Contact__button">Send Message</button>
      
      </form>
      <p className="Contact__credit">© {new Date().getFullYear()} Raqiiba Issahaku</p>
    </section>
  );
}
export default Contact;