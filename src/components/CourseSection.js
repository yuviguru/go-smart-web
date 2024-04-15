import React from 'react';
import "../styles/course.scss";
import Card from "../components/ResuableElements/Card";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";

export default function Course() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const courseQuotes = {
    english: ['“ Fluent', 'Conversations,', 'Confident', 'Connections “'],
    maths: ['“ Equations', 'Resolved,', 'Futures', 'Evolved ”'],
    writing: ['“ In The', 'Dance Of Ink,', 'Make Your', 'Mark ”']
  }
  return (
    
    <section id="courses">
      <div className='body-container_course'>
        <div className='columns'>
          <div className='column is-three-fifths is-half-widescreen'>
            <div className='body-content_course'>
              <h1 className='body-content_title'>Our Courses</h1>
              <p className='body-content_description'>"Unlock a world of possibilities with Go Smart's cutting-edge courses. From innovative tech exploration to creative arts immersion, our curated programs redefine education. Dive into a transformative learning experience, where expert guidance meets individual passion. Choose excellence, choose Go Smart – because education should inspire, not just instruct."</p>
              <button className='button is-normal is-responsive'>
                Explore More
              </button>          
            </div>
          </div>
          <div className='column is-two-fifths is-half-widescreen courses-slider'>
            <Slider {...settings}>
              <Card
                imageUrl="https://placeimg.com/200/200/animals"
                title="SMART ENGLISH"
                description={courseQuotes.english}
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="SMART MATHS"
                description={courseQuotes.maths}
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="SMART WRITING"
                description={courseQuotes.writing}
              />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}