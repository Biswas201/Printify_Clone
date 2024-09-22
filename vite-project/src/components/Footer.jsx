import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo-old-B5JY5YNQ.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="/intellectual-property-policy">
              Intellectual Property Policy
            </a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/security">Security</a>
          </div>
          <p>© 2024 Printify, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
