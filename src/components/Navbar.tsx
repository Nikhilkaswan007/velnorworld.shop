"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="marketing-navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#top" aria-label="Velnor World home">
          <span className="brand-mark">V</span>
          <span>Velnor World</span>
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <a className="navbar-link" href="#top">Home</a>
          <a className="navbar-link" href="#packages">Packages</a>
          <a className="navbar-link" href="#testimonials">Testimonials</a>
          <a className="navbar-link" href="#faq">FAQ</a>
          <a className="navbar-link" href="#contact">Contact</a>
        </nav>

        <div className="navbar-end">
          <a className="ds-button ds-button-primary" href="#packages">Order Now</a>
        </div>
      </div>
    </header>
  );
}
