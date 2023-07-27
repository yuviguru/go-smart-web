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
                            <div className="tile is-child box"> vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
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
