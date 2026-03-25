import React, { useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg header-main">
      <div className="container-fluid py-3">
        {/* The "Pill" Container */}
        <div className="header-container mx-lg-5 d-flex justify-content-between">
          
          {/* LEFT → LOGO */}
          <Link className="navbar-brand header-left" to="/">
            <img src={logo} alt="logo" className="header-logo" />
          </Link>

          {/* HAMBURGER (Replaces navbar-toggler) */}
          <div 
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* NAV + BUTTON (The Collapse Wrapper) */}
          <div className={`collapse navbar-collapse header-menu ${menuOpen ? "show" : ""}`}>
            
            <div className="navbar-nav header-middle">
              <a href="/home" className="nav-link nav-link-custom">Home</a>
              <a href="#service" className="nav-link nav-link-custom">Services</a>
              <a href="#about" className="nav-link nav-link-custom">About</a>
              <a href="#testimonial" className="nav-link nav-link-custom">Testimonial</a>
              <a href="#team" className="nav-link nav-link-custom">Team</a>
              <a href="#faq" className="nav-link nav-link-custom">FAQ</a>
            </div>

            <div className="header-right ms-auto">
              <Link className="btn header-book-btn" to="book/">Book Slot</Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};