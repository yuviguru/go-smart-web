import React from 'react';
import "../styles/institution.scss";
import Card from "../components/ResuableElements/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Institution() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    
    <section id="institutions">
      <div className='container is-fullhd body-container_institution'>
        <div className='columns'>
          <div className='column is-half courses-slider'>
            <Slider {...settings}>
              <Card
                imageUrl="https://placeimg.com/200/200/animals"
                title="Tile 1"
                description="This is the first tile."
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="Tile 2"
                description="This is the second tile."
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="Tile 3"
                description="This is the second tile."
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="Tile 4"
                description="This is the second tile."
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="Tile 5"
                description="This is the second tile."
              />
              <Card
                imageUrl="https://placeimg.com/200/200/nature"
                title="Tile 6"
                description="This is the second tile."
              />
            </Slider>
          </div>
          <div className='column is-half'>
            <div className='body-content_institution'>
              <h1 className='body-content_title'>INSTITUTIONS THAT WORK WITH US</h1>
              <p className='body-content_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}