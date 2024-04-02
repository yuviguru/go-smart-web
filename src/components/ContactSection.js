import React from 'react';
import "../styles/contact.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "@reach/router";

console.log('contact component');

export default function Contact() {
  return (
  <section id="contact">
    <div className='body-container_contact'>
      <div className='columns'>
        <div className='column is-three-fifths'>
            <h1 className='body-content_title'>CONTACT US</h1>
            <p className='body-content_description'>PHONE NUMBER</p>
            <p className='body-content_description'>MAIL ID</p>
            <p className='body-content_description'>ADDRESS</p>
            <h2 className='body-content_title'>USEFUL LINKS</h2>
            <div className='is-flex use-full_links'>
              <Link className="body-content_description" to="#home">HOME</Link>
              <Link className="body-content_description" to="#about">ABOUT</Link>
              <Link className="body-content_description" to="#courses">COURSES</Link>
              <Link className="body-content_description" to="#engagements-typeOne">ENGAGEMENTS</Link>
              {/* <Link className="navbar-item" to="/about-us/">News and Events</Link> */}
              <Link className="body-content_description" to="#contact">CONTACT</Link>
            </div>
        </div>
        <div className='column is-two-fifths'>
            <StaticImage className='contact-us_image' src="../svg/rainbow.svg" alt="ContactGoSmart" />
            <h1 className='body-content_title has-text-centered'>GET IN TOUCH </h1>
            <div className='contact_form has-text-right'>
              <input className="input" placeholder='NAME' name='name' />
              <input className="input" placeholder='MAIL ID' name='mailId' />
              <textarea className='textarea' placeholder='MESSAGE' name='message'></textarea>
              <button className='button is-normal is-responsive'>
                Submit
              </button>
            </div>
        </div>
      </div>
    </div>
  </section>
);
}