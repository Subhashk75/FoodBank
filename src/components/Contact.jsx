import React from 'react'
import Button from '@mui/material/Button';
const Contact=()=>{
  return (
      <>
      <div className="contact-page">
      <div className="contact-content">
        <div className="contact-image">
          {/* <img src="src/assets/contact-img.jpg" alt="Contact Us" /> */}
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <input type="text" placeholder="Full Name" />
            <br />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Type your message here"></textarea>
            <br />
            <Button variant="contained" type="submit" >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="contact-footer">
        <div className="contact-info">
          <div className="contact-item">
            <img src="src\assets\CALL LOGO.png" alt="Phone Icon" />
            <h2>+91-XXXXXXXXXX</h2>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank">
              <img src="src\assets\FACBOOKLOGO.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="src\assets\INSTAGRAMLOGO.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img src="src\assets\TWITTERLOGO.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

export default Contact;

