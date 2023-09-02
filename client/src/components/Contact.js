import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <main className="main1">
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <address>
            <p>
              <strong>Address:</strong> 123 Main St, City, Country
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
          </address>
        </div>
      </main>
    </>
  );
};

export default Contact;
