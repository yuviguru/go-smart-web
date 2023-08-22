import React from 'react';
import "../styles/testimonials.scss";

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className='container is-fullhd body-container_testimonial'>
                <h4 className="title is-4 has-text-centered section-title">WHAT DOES OUR CLIENTS SAY</h4>
                <div className="tile is-ancestor">
                    <div className="tile is-horizontal">
                        <div className="tile is-parent">
                            <div className="tile is-child box"> 
                                <h5>NAME</h5>
                                <h6>WHO ARE THEY?</h6>
                                <p>vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <h5>NAME</h5>
                                <h6>WHO ARE THEY?</h6>
                                <p>Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <h5>NAME</h5>
                                <h6>WHO ARE THEY?</h6>
                                <p>Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
