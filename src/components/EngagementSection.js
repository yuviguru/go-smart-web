import React from 'react';
import "../styles/engagements.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Engagements() {
  return (
    <section id="engagements">
      <div className='container is-fullhd body-container_engagements'>
        <h4 className="title is-4 has-text-centered section-title engagement-title">OUR OTHER ENGAGEMENTS</h4>
        <div className='columns mb-6'>
          <div className='column is-2'>
              <StaticImage className='image-sub-engagements-1' src="../svg/space-craft.svg" alt="GoSmartEngagements" />
          </div>
          <div className='column is-4'>
            <div className='image-background'></div>
              <StaticImage className='image-engagements-1' src="../svg/section-1.svg" alt="GoSmartEngagements" />
          </div>
          <div className='column is-5 is-offset-1'>
              <h1 className='body-content_title'>ASCENT COMPETETIONS</h1>
              <p className='body-content_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-4'>
            <div className='image-background'></div>
              <StaticImage className='image-engagements-2' src="../svg/section-2.svg" alt="GoSmartEngagements" />
          </div>
          <div className='column is-5 is-offset-1'>
              <h1 className='body-content_title'>PERSONAL TRAINING</h1>
              <p className='body-content_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='column is-2'>
              <StaticImage className='image-sub-engagements-1' src="../svg/boat.svg" alt="GoSmartEngagements" />
          </div>
        </div>
      </div>
    </section>
  );
}