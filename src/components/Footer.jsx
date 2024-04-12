import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';

const Footer = () => {
  const location = useLocation();

  return (
    <div className='footer-container'>
      <div className='footer-about'>
        <h3 className='footer-about-title'>About us</h3><br />
        <p className='footer-about-description'>Our mission is to combat food waste and <br /> support individuals in need by rescuing <br />surplus food from various sources like hotels, <br /> restaurants, and event venues. We distribute <br />this rescued food to communities facing food <br />insecurity, ensuring that valuable resources are <br />utilized to their fullest potential, benefiting both <br /> people and the environment.</p>
      </div>
      <div className='footer-contact'>
        <h3 className='footer-contact-title'>Contact Us</h3>
        <br />
        {/* <p className='footer-contact-email'>Email :fooddonate123@gmail.com</p> */}
        
        <div className="contact-phone">
          <div className="social-icons">
            <a href="https:www.whatsapp.com" target="_blank">
              <img src="src/assets/WHATSAPPLOGO.png" alt="WhatsApp" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="src/assets/INSTAGRAMLOGO.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img src="src\assets\FACBOOKLOGO.png" alt="Facebook" />
            </a>
            <a href="mailto:Fooddonate@gmail.com" target="_blank">
              <img src="src\assets\EMAILLOG.png" alt="Email" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="src\assets\TWITTERLOGO.png" alt="Twitter" />
            </a>
          </div>
          <p>Food Donate Centre<br/>123 Main St.<br/>Patna, India<br/>800005<br/><a href="mailto:fooddonate@gmail.com">fooddonate@gmail.com</a></p>
        </div>
      </div>
      <br />
      <div className='footer-copyright'>
        <p>© 2023 Food Donate. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;