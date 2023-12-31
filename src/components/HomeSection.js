import React from 'react';
import "../styles/home.scss";
import BannerImage from "../svg/banner-1.svg";

export default function Home() {
  return (
    <section id="home">
      <div className='container is-fullhd body-container_home'>
          <div className='body-content_home'>
            <h1 className='body-content_title'>BE SMART WITH <br/>GO SMART </h1>
            <p className='body-content_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className="button is-normal is-responsive">
              Get in touch
            </button>          
          </div> 
      <BannerImage id="bannerImage" alt=""/>
      </div>
    </section>
  );
}