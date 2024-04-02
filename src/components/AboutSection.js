import React from 'react';
import "../styles/about.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about">
            <div className='body-container_about'>
                <StaticImage className='about-us-image' src="../svg/rocket.svg" alt="AboutGoSmart" />
                <h4 className="title is-4 has-text-centered section-title">ABOUT GO SMART</h4>
                <div className="tile is-ancestor">
                    <div className="tile is-horizontal">
                        <div className="tile is-parent">
                            <motion.div className="tile is-child box">
                                <h4 className="title is-4 has-text-centered sub-section-title">Mission</h4>
                                <ul>
                                    <li><strong>Beyond Boundaries:</strong> <br/>"Our Educational Renaissance"</li>
                                    <li><strong>Innovation Nexus:</strong><br/>"Nurturing the Next Generation"</li>
                                    <li><strong>Futures Crafted:</strong><br/>"Our Visionary Mission"</li>
                                    <li><strong>Unleashing Brilliance:</strong><br/>"Your Child's Potential, Amplified!"</li>
                                    <li><strong>Smart Minds, Bright Futures:</strong><br/>"Our Distinctive Approach"</li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="tile is-parent">
                            <motion.div className="tile is-child box">
                                <h4 className="title is-4 has-text-centered sub-section-title ">Vision</h4>
                                <ul>
                                    <li><strong>Visionary Blend:</strong> <br/>"Where Skills Spark Values"</li>
                                    <li><strong>Trailblazers Unleashed:</strong><br/>"Smoothing Challenges with Ease"</li>
                                    <li><strong>Change Catalysts:</strong><br/>"Pioneers of Positive Shifts"</li>
                                    <li><strong>Brilliance Hub:</strong><br/>"Pulsating Innovation Oasis"</li>
                                    <li><strong>Empower Tomorrow:</strong><br/>"Join the Vision with Us!"</li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="tile is-parent">
                            <motion.div className="tile is-child box">
                                <h4 className="title is-4 has-text-centered sub-section-title">Goals</h4>
                                <ul>
                                    <li><strong>Refined Talents:</strong> <br/>"Shaping acuity and communication in each child"</li>
                                    <li><strong>Mentorship Impact:</strong><br/>"Fueling student growth with outstanding mentors"</li>
                                    <li><strong>Future Ready:</strong><br/>"Anticipating needs, equipping for a visionary tomorrow"</li>
                                    <li><strong>Commitment to Excellence:</strong><br/>"Pledging preparation, benchmarks, competition"</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
console.log('about component');

export default About;
