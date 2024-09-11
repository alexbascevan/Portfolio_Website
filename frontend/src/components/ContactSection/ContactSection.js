import React, { useState } from 'react';
import './ContactSection.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    sendersName: '',
    sendersEmail: '',
    message: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmationMessage('');
    setErrorMessage('');
  
    const { sendersName, sendersEmail, message } = formData;
    let valid = true;
  
    // Validate form fields
    if (!sendersName.trim()) {
      setErrorMessage('Name is required.');
      valid = false;
    }
    if (!sendersEmail.trim() || !validateEmail(sendersEmail)) {
      setErrorMessage('Valid email is required.');
      valid = false;
    }
    if (!message.trim()) {
      setErrorMessage('Message is required.');
      valid = false;
    }
  
    if (!valid) {
      return; // Stop if validation fails
    }
  
    try {
      // Send form data via Fetch API
      const response = await fetch('http://localhost:8080/api/sendEmail', { // Adjusted URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sendersName: sendersName,
          sendersEmail: sendersEmail,
          message: message,
        }),
      });
  
      if (response.ok) {
        const data = await response.text(); // Get response text
        setConfirmationMessage(data);
        setFormData({ sendersName: '', sendersEmail: '', message: '' }); // Reset the form
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while sending the email.');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div>
        <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
        <br />
        <p>
          If you'd like to get in touch with me, please feel free to reach out via email or LinkedIn. I'm always open to discussing new opportunities and collaborations.
        </p>
        <br />
        <a
          href="https://www.linkedin.com/in/alex-bascevan-2697752b7/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect with me on LinkedIn"
          className="linkedin-link"
        >
          <i className="fab fa-linkedin"></i>
          <span>Connect with me on LinkedIn</span>
        </a>
        <br />

        {/* Confirmation Message */}
        {confirmationMessage && (
          <div id="confirmationMessage" className="confirmation-message">
            {confirmationMessage}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div id="errorMessage" className="error-message">
            {errorMessage}
          </div>
        )}

        <form id="emailForm" onSubmit={handleSubmit}>
          <input type="hidden" name="to" />

          <div className="form-group">
            <label htmlFor="sendersName">Name:</label>
            <input
              type="text"
              id="sendersName"
              value={formData.sendersName}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sendersEmail">Email:</label>
            <input
              type="text"
              id="sendersEmail"
              value={formData.sendersEmail}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
