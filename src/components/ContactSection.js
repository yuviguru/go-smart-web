import React from 'react';
import "../styles/contact.scss";
import { StaticImage } from "gatsby-plugin-image";

console.log('contact component');

export default function Contact() {
  return (
  <section id="contact">
    <div className='container is-fullhd body-container_contact'>
      <div className='columns'>
        <div className='column is-three-fifths'>
            <h1 className='body-content_title'>CONTACT US</h1>
            <p className='body-content_description'>PHONE NUMBER</p>
            <p className='body-content_description'>MAIL ID</p>
            <p className='body-content_description'>ADDRESS</p>
            <h2 className='body-content_title'>USEFUL LINKS</h2>
            <div className='is-flex use-full_links'>
              <p className='body-content_description'>HOME</p>
              <p className='body-content_description'>OUR COURSES</p>
              <p className='body-content_description'>GALLERY</p>
              <p className='body-content_description'>NEWS AND EVENTS</p>
              <p className='body-content_description'>ABOUT</p>
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