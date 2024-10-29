import React, { Component } from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

class FooterSection extends Component {
  render() {
    return (
      <section className={styles.footer} id="footer">
        <div className={styles.footerContents}>
          <div className={`${styles.footerCol} ${styles.footerCol1}`}>
            <div className={styles.colTitle}>
              <h3 style={{  color: "white"}}>About Us</h3>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Impact & Stories</a></li>
                <li><a href="#">How We Work</a></li>
                <li><a href="#">Our Team</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol2}`}>
            <div className={styles.colTitle}>
              <h4>Get Involved</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Donate</a></li>
                <li><a href="#">Volunteer</a></li>
                <li><a href="#">Fundraise</a></li>
                <li><a href="#">Partnerships</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol3}`}>
            <div className={styles.colTitle}>
              <h4>Get Help</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Find Food Assistance</a></li>
                <li><a href="#">Eligibility Criteria</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Locations</a></li>
              </ul>
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerCol4}`}>
            <div className={styles.colTitle}>
              <h4>Resources</h4>
            </div>
            <hr className={styles.hrLine} />
            <div className={styles.colContents}>
              <ul>
                <li><a href="#">Annual Report</a></li>
                <li><a href="#">Food Drive Kit</a></li>
                <li><a href="#">Nutritional Guidelines</a></li>
                <li><a href="#">Advocacy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerPart2}>
          <div className={styles.footerLogo}>
            <div className={styles.socialMediaAccounts}>
              <ul className={styles.socialUl}>
                <li><a href="https://t.me/foodbank" target="main" className={styles.telegram}><FaTelegram className="fab fa-telegram" style={{color:"#1DA1F2",marginLeft:"5px",marginTop:"5px"}} /></a></li>
                <li><a href="https://www.facebook.com/foodbank" target="main" className={styles.facebook}><FaFacebook className="fab fa-facebook" style={{color:"#2867B2",marginLeft:"5px",marginTop:"5px"}}/></a></li>
                <li><a href="https://instagram.com/foodbank" target="main" className={styles.instagram}><RiInstagramFill className="fab fa-instagram" style={{color:"#E1306C",marginLeft:"5px",marginTop:"5px"}} /></a></li>
                <li><a href="https://twitter.com/foodbank" target="main" className={styles.twitter}><FaSquareXTwitter className="fab fa-twitter" style={{color:"#2867B2",marginLeft:"5px",marginTop:"5px"}} /></a></li>
                <li><a href="https://www.youtube.com/foodbank" target="main" className={styles.youtube}><FaYoutube className="fab fa-youtube" style={{color:"#ff0000",marginLeft:"5px",marginTop:"5px"}} /></a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerPart2Col}>
            <div className={styles.footerPart2Col1}>
              <h3>Contact Us</h3>
              <p>1234 Community Drive, City, State, Zip Code</p>
              <p>Phone: (123) 456-7890 | Email: info@foodbank.org</p>
            </div>
          </div>
        </div>
        <div className={styles.copyRights}>
          <p><a href="#">Terms of Use | Privacy Policy</a></p>
          <p>© 2024 Food Bank Name. All rights reserved.</p>
        </div>
      </section>
    );
  }
}

export default FooterSection;
