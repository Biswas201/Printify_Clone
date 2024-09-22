import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo-old-B5JY5YNQ.svg";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [needDropdown, setNeedDropdown] = useState(false);
  const [useDropdown, setUseDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  const toggleNeedDropdown = () => {
    setNeedDropdown(!needDropdown);
  };

  const toggleUseDropdown = () => {
    setUseDropdown(!useDropdown);
  };

  const togglemobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="printify logo" className="logo" />
          <div className="hamburger" onClick={togglemobileMenu}>
              &#9776;
          </div>
        </div>
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="/">Catalog</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/">How it works</a>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/">How Printify Works</a>
                </li>
                <li>
                  <a href="/">Print On Demand</a>
                </li>
                <li>
                  <a href="/">Printify Quality Promise</a>
                </li>
                <li>
                  <a href="/">What to Sell?</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleServicesDropdown}
            onMouseLeave={toggleServicesDropdown}
          >
            <a href="/">Services</a>
            {servicesDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/">Printify Studio</a>
                </li>
                <li>
                  <a href="/">Printify Express Delivery</a>
                </li>
                <li>
                  <a href="/">Transfer Products</a>
                </li>
                <li>
                  <a href="/">Order In Bulk</a>
                </li>
                <li>
                  <a href="/">Experts Program</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleUseDropdown}
            onMouseLeave={toggleUseDropdown}
          >
            <a href="/">use-cases</a>
            {useDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/">Merch for Fans</a>
                </li>
                <li>
                  <a href="/">Merch for eCommerce</a>
                </li>
                <li>
                  <a href="/">Merch for Enterprises</a>
                </li>
                <li>
                  <a href="/">Grow Your Store</a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={toggleNeedDropdown}
            onMouseLeave={toggleNeedDropdown}
          >
            <a href="/">Need help ?</a>
            {needDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="/">Help Center</a>
                </li>
                <li>
                  <a href="/">Contacts</a>
                </li>
                <li>
                  <a href="/">My Requests</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="navbar-auth">
          <button className="login">Login in</button>
          <button className="signup">Sign up</button>
        </div>
      </nav>
  );
};

export default Navbar;
