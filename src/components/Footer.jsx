import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-about'>
            <h3 className='footer-about-title'>About us</h3>
            <p className='footer-about-discription'>The basic concept of this project <br/>Food Waste Management is to  <br/>collect the excess/leftover food from  <br/>donors such us hotels, restaurants ,  <br/>marriage halls ,etc and distribution <br/> to the needy people</p>
      </div>
      <div className='footer-contact'>
           <h3 className='footer-contact-title'>Contact</h3>
              <p className='footer-contact-email'>Fooddonate@gmail.com</p>
              <div className="contact-phone">
                       <img src="src\assets\phone icon.jpg"></img>
                       <h2>: XXXXXXXXXX</h2>
                       <br/>
                       <img src="src\assets\facebook icon.webp"></img>
                       <img src="src\assets\instagram-icon.avif"></img>
                       <img src="src\assets\twitter-icon.webp"></img>
                  </div>
                  <h2>Food Donate</h2>
              <div className='footer-contact-btn'>
              <Button variant="text" style={{color:"black"}}><Link to="/" style={{textDecoration :'none'}}>Home</Link></Button>
              <Button variant="text" style={{color:"black"}}><Link to="/about" style={{textDecoration :'none'}} >About</Link></Button>
              <Button variant="text" style={{color:"black"}}><Link to="/contact" style={{textDecoration :'none'}}>Contact</Link></Button>
              <Button variant="text" style={{color:"black"}}><Link to="/profile" style={{textDecoration :'none'}}>Profile</Link></Button>
              </div>
             </div>
        </div>
  )
}

export default Footer
