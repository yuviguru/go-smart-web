import React, { useState, setState } from 'react';
import { Link } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/navigation.scss";

export default function NavigationBar() {
  const [showNavBurger, setshowNavBurger] = useState(0);
  return (
    <nav className="navbar container is-fixed-top is-fullhd" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <StaticImage src="../svg/logo.svg" alt="GoSmart" />
      </a>
  
      <a role="button" className={`navbar-burger ${showNavBurger ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => { setshowNavBurger(showNavBurger ? 0 : 1) }}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className={`navbar-menu ${showNavBurger ? 'is-active' : ''}`}>
      <div className="navbar-end">
        <Link className="navbar-item" to="#home">Home</Link>
        <Link className="navbar-item" to="#about">About</Link>
        <Link className="navbar-item" to="#courses">Our Courses</Link>
        <Link className="navbar-item" to="#engagements-typeOne">Our Engagements</Link>
        {/* <Link className="navbar-item" to="/about-us/">News and Events</Link> */}
        <Link className="navbar-item" to="#contact">Contact</Link>
      </div>
    </div>
  </nav>
  );
}