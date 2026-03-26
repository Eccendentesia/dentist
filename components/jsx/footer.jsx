import React from "react";
import "../css/footer.css";
import logo from '../../images/logo.png'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="footer-main">

      <div className="container footer-top">

        {/* LOGO */}
        <div className="footer-col logo-col">
          <img className="footer-logo"src={logo}></img>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h4>Explore</h4>
          <p>Services</p>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Support</p>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h4>Resources</h4>
          <p>Guides</p>
          <p>FAQ</p>
          <p>Careers</p>
          <p>Community</p>
          <p>Connect</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>Follow us</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>YouTube</p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col newsletter">
          <h4>Updates</h4>
          <p>
            Get the latest news and updates delivered straight to your inbox every week.
          </p>

          <div className="newsletter-box">
            <input type="text" placeholder="Enter your email" />
            <button>Join</button>
          </div>

          <span className="privacy-text">
            We respect your privacy and only send what matters to you.
          </span>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom container">
        <p>© 2024 Dental Harmony Clinic. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Settings</span>
        </div>

       <div className="footer-icons">
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaTwitter /></a>
  <a href="#"><FaLinkedinIn /></a>
  <a href="#"><FaYoutube /></a>
</div>
      </div>

    </footer>
  );
};