import React from 'react';
import "../styles/about.scss";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
    return (
        <section id="about">
            <div className='container is-fullhd body-container_about'>
                <StaticImage className='about-us-image' src="../svg/rocket.svg" alt="AboutGoSmart" />
                <h4 class="title is-4 has-text-centered section-title">ABOUT GO SMART</h4>
                <div class="tile is-ancestor">
                    <div class="tile is-horizontal">
                        <div class="tile is-parent">
                            <div class="tile is-child box"> vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
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
