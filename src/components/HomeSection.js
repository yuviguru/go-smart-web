import React from 'react';
import "../styles/home.scss";
import BannerImage from "../svg/banner-1.svg";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <section id="home">
      <div className='container is-fullhd body-container_home'>
          <div className='body-content_home'>
            <h1 className='body-content_title'>BE SMART WITH<br/>
            </h1>
              <StaticImage src="../images/mini-logo.png" className="body-content_logo" alt="GoSmartLogo" transformOptions='{fit: "cover", cropFocus: "attention"}' width={450} layout='constrained'/>
            <p className='body-content_description'>Unleashing Potential, Inspiring Brilliance. Our tailored education fosters critical thinking and creativity. Choose a future of limitless possibilities with Go Smart's holistic approach. Elevate your child's journey – where intelligence meets innovation."</p>
            <button className="button is-normal is-responsive">
              Get in touch
            </button>          
          </div> 
      <BannerImage id="bannerImage" alt=""/>
      </div>
    </section>
  );
}