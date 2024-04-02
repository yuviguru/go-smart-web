import React from 'react';
import "../styles/engagements.scss";
import { StaticImage } from "gatsby-plugin-image";

export default function Engagements({ type}) {
  return (
    <section id={'engagements-'+type}>
      <div className='container is-fullhd body-container_engagements'>
        <h4 className="title is-4 has-text-centered section-title engagement-title">OUR OTHER ENGAGEMENTS</h4>
        <div className='columns'>
          <div className='column is-2 is-hidden-mobile'>
              <StaticImage className='image-sub-engagements-1' src="../svg/space-craft.svg" alt="GoSmartEngagements" />
          </div>
          <div className='column is-4 is-hidden-touch'>
            <div className='image-background'></div>
              <StaticImage className='image-engagements-1' src="../svg/section-1.svg" alt="GoSmartEngagements" />
          </div>
          { type == 'typeOne' ? (
              <div className='column is-5-desktop is-offset-1 body-content-main'>
                  <h1 className='body-content_title'>ASCENT COMPETETIONS</h1>
                  <p className='body-content_description'>Ascent, the premier inter-school competition that transcends boundaries.Unleash your unique talents in a global arena, where academic prowess and creative brilliance converge. Ascent goes beyond winning, fostering critical skills for the future and creating a community of like-minded achievers. Join us on a journey of inclusive excellence, where every student is celebrated for their distinct abilities.</p>
              </div> 
            ) : (
              <div className='column is-5-desktop is-offset-1 body-content-main'>
                <h1 className='body-content_title'>DAY CARE</h1>
                <p className='body-content_description'>Bright Beginnings Playhouse offers high-quality early education, building a robust foundation for kindergarten. Our unique package includes engaging audio-visual learning, teaching phonetics and fostering meaningful conversations. With a focus on parental care and top-notch resources, we're committed to shaping a healthy generation and a bright future. Choose us for transformative early learning.</p>
              </div>
            )
          }
        </div>
        <div className='columns'>
          <div className='column is-4 is-hidden-touch'>
            <div className='image-background'></div>
              <StaticImage className='image-engagements-2' src="../svg/section-2.svg" alt="GoSmartEngagements" />
          </div>
          { type == 'typeOne' ? (
              <div className='column is-5-desktop is-offset-1 body-content-main'>
                  <h1 className='body-content_title'>PERSONAL TRAINING</h1>
                  <p className='body-content_description'>Our holistic language programs, expertly guided, seamlessly integrate reading, listening, writing, and speaking. Tailored for enhanced language skills, our approach ensures effective workplace communication. Benefit from a balanced focus, excelling in reading business documents, active discussion participation, impactful written communication, and confident verbal presentations. Elevate your language competency across all facets for workplace success.</p>
              </div> 
            ) : (
              <div className='column is-5-desktop is-offset-1 body-content-main'>
                <h1 className='body-content_title'>ADMINISTRATION MANAGEMENT</h1>
                <p className='body-content_description'>Our comprehensive student administration processes ensure a holistic approach throughout every student's academic path. From enrollment to grading and attendance tracking, we are dedicated to providing a supportive framework for growth. Join us in creating an educational experience where milestones are celebrated, and achievements are recognized. Explore the possibilities of a well-managed and enriching academic adventure with us!</p>
              </div>
            )
          }
          <div className='column is-2 is-hidden-mobile'>
              <StaticImage className='image-sub-engagements-1' src="../svg/boat.svg" alt="GoSmartEngagements" />
          </div>
        </div>
      </div>
    </section>
  );
}