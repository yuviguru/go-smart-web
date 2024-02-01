import React from 'react';
import "../styles/about.scss";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
    return (
        <section id="about">
            <div className='container is-fullhd body-container_about'>
                <StaticImage className='about-us-image' src="../svg/rocket.svg" alt="AboutGoSmart" />
                <h4 className="title is-4 has-text-centered section-title">ABOUT GO SMART</h4>
                <div className="tile is-ancestor">
                    <div className="tile is-horizontal">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <h4 className="title is-4 has-text-centered sub-section-title">Mission</h4>
                                <ul>
                                    <li><strong>Beyond Boundaries:</strong> <br/>"Our Educational Renaissance"</li><br/>
                                    <li><strong>Innovation Nexus:</strong><br/>"Nurturing the Next Generation"</li><br/>
                                    <li><strong>Futures Crafted:</strong><br/>"Our Visionary Mission"</li><br/>
                                    <li><strong>Unleashing Brilliance:</strong><br/>"Your Child's Potential, Amplified!"</li><br/>
                                    <li><strong>Smart Minds, Bright Futures:</strong><br/>"Our Distinctive Approach"</li><br/>
                                </ul>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <h4 className="title is-4 has-text-centered sub-section-title">Vision</h4>
                                <ul>
                                    <li><strong>Visionary Blend:</strong> <br/>"Where Skills Spark Values"</li><br/>
                                    <li><strong>Trailblazers Unleashed:</strong><br/>"Smoothing Challenges with Ease"</li><br/>
                                    <li><strong>Change Catalysts:</strong><br/>"Pioneers of Positive Shifts"</li><br/>
                                    <li><strong>Brilliance Hub:</strong><br/>"Pulsating Innovation Oasis"</li><br/>
                                    <li><strong>Empower Tomorrow:</strong><br/>"Join the Vision with Us!"</li><br/>
                                </ul>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <h4 className="title is-4 has-text-centered sub-section-title">Goals</h4>
                                <ul>
                                    <li><strong>Refined Talents:</strong> <br/>"Shaping acuity and communication in each child"</li><br/>
                                    <li><strong>Mentorship Impact:</strong><br/>"Fueling student growth with outstanding mentors"</li><br/>
                                    <li><strong>Future Ready:</strong><br/>"Anticipating needs, equipping for a visionary tomorrow"</li><br/>
                                    <li><strong>Commitment to Excellence:</strong><br/>"Pledging preparation, benchmarks, competition"</li><br/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
console.log('about component');

export default About;
