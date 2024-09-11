// src/components/ContactSection.js
import React, { useState } from 'react';
import './ContactSection.css'; // Create this CSS file to style this component

const ContactSection = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear previous messages
    setConfirmationMessage('');
    setErrorMessage('');

    const formData = new FormData(event.target);

    const response = await fetch('/sendEmail', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      setConfirmationMessage('Email sent successfully!');
      event.target.reset();
    } else {
      setErrorMessage('Failed to send email.');
    }
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit} className="email-form" id="emailForm">
        <h1>Contact Me</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="sendersEmail">Email:</label>
          <input type="email" id="sendersEmail" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
        {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </section>
  );
};

export default ContactSection;
