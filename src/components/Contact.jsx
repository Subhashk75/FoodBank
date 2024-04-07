import React from 'react'
import Button from '@mui/material/Button';
const Contact=()=>{
  return (
      <>
      <div className="contact-page">
          <img src="src\assets\contact img.jpg" ></img>
          <div className="contact-form"> 
              <h1>Contact Us</h1>
              <br></br><br></br><br></br>
              <form>
                  <input type="text" placeholder="Full Name"/><br></br><br></br><br></br>
                  <input type="email" placeholder="Email address"/><br></br><br></br><br></br>
                  <input type="textarea" placeholder="type your message here"/><br></br><br></br>
                  <button type="submit" >submit</button>
              </form>
              <div className="contact-footer">
                  <div className="contact-phone">
                       <img src="src\assets\phone icon.jpg"></img>
                       <h2>: XXXXXXXXXX</h2>
                       <img src="src\assets\facebook icon.webp"></img>
                       <img src="src\assets\instagram-icon.avif"></img>
                       <img src="src\assets\twitter-icon.webp"></img>
                  </div>
                  {/* <div className="contact-social-media">
                       <img src="src\assets\facebook icon.webp"></img>
                       <img src="src\assets\instagram-icon.avif"></img>
                       <img src="src\assets\twitter-icon.webp"></img>
                  </div> */}
              </div>
          </div>
      </div>
      </>
  );
}

export default Contact;

