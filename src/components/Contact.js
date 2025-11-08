import React from 'react';
import '../App.css';

function Contact() {
  return (
    <section className="section contact" id = "contact">
      <h2>Contact Us</h2>
      <p>Have a project or event in mind? We’d love to hear from you. Whether you’re planning a concert, a corporate gala, 
        a special collaboration, or a music workshop, our team is here to help bring your vision to life. 
        Reach out to us at <a className = "email-link" href="mailto:info@greatmusic.com">info@greatmusic.com</a>.
      </p>

    </section>
  );
}

export default Contact;
