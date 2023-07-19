import React, { useState, setState } from 'react';
import { Link } from "@reach/router";
import GoSmartLogo from '../svg/logo.svg'
import "../styles/navigation.scss"

export default function NavigationBar() {
  const [showNavBurger, setshowNavBurger] = useState(0);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <GoSmartLogo width="112" height="28" alt=""/>
      </a>
  
      <a role="button" className={`navbar-burger ${showNavBurger ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { setshowNavBurger(showNavBurger ? 0 : 1) }}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className={`navbar-menu ${showNavBurger ? 'is-active' : ''}`}>
      <div className="navbar-end">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/about-us/">About</Link>
        <Link className="navbar-item" to="/about-us/">Our Courses</Link>
        <Link className="navbar-item" to="/about-us/">Gallery</Link>
        <Link className="navbar-item" to="/about-us/">News and Events</Link>
        <Link className="navbar-item" to="/contact/">Contact</Link>
      </div>
    </div>
  </nav>
  );
}