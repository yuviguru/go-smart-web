import React from "react";
import "../styles/home.scss";
import BannerImage from "../svg/banner-1.svg";
import { StaticImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <section id="home">
      <div className="body-container_home">
        <div className="body-content_home">
          <div className="slider-content">
            <h1 className="body-content_title animate__animated animate__flipInX animate__delay-1s">
              BE SMART WITH
              <br />
            </h1>
            <h2 className="body-content_title animate__animated animate__flipInX animate__delay-2s">GO SMART</h2>
            <p className="body-content_description animate__animated animate__flipInX animate__delay-3s">
              Unleashing Potential, Inspiring Brilliance. Our tailored education
              fosters critical thinking and creativity. Choose a future of
              limitless possibilities with Go Smart's holistic approach. Elevate
              your child's journey – where intelligence meets innovation."
            </p>
            <button className="button is-normal is-responsive animate__animated animate__flipInX animate__delay-4s">
              Get in touch
            </button>
          </div>
          <div className="slider-image animate__animated animate__zoomInDown">
            <StaticImage
              src="../svg/banner-1.png"
              alt="SliderImage1"
              transformOptions='{fit: "cover", cropFocus: "attention"}'
              layout="constrained"
            />
          </div>
        </div>
        {/* <Slider {...settings}>
          <div className="columns body-content_home slide-1">
            <div className="column slider-content">
              <h1 className="body-content_title">
                BE SMART WITH
                <br />
              </h1>
              <h2 className="body-content_title">GO SMART</h2>
              <p className="body-content_description">
                Unleashing Potential, Inspiring Brilliance. Our tailored education
                fosters critical thinking and creativity. Choose a future of
                limitless possibilities with Go Smart's holistic approach. Elevate
                your child's journey – where intelligence meets innovation."
              </p>
              <button className="button is-normal is-responsive">
                Get in touch
              </button>
            </div>
            <div className="column slider-image">
              <StaticImage
                src="../svg/banner-1.png"
                alt="SliderImage1"
                transformOptions='{fit: "cover", cropFocus: "attention"}'
              />
            </div>
          </div>

          <div className="body-content_home slide-2">
            <h1 className="body-content_title">
              BE SMART WITH
              <br />
            </h1>
            <StaticImage
              src="../images/mini-logo.png"
              className="body-content_logo"
              alt="GoSmartLogo"
              transformOptions='{fit: "cover", cropFocus: "attention"}'
              width={450}
              layout="constrained"
            />
            <p className="body-content_description">
              Unleashing Potential, Inspiring Brilliance. Our tailored education
              fosters critical thinking and creativity. Choose a future of
              limitless possibilities with Go Smart's holistic approach. Elevate
              your child's journey – where intelligence meets innovation."
            </p>
            <button className="button is-normal is-responsive">
              Get in touch
            </button>
          </div>

          <div className="body-content_home slide-3">
            <h1 className="body-content_title">
              BE SMART WITH
              <br />
            </h1>
            <StaticImage
              src="../images/mini-logo.png"
              className="body-content_logo"
              alt="GoSmartLogo"
              transformOptions='{fit: "cover", cropFocus: "attention"}'
              width={450}
              layout="constrained"
            />
            <p className="body-content_description">
              Unleashing Potential, Inspiring Brilliance. Our tailored education
              fosters critical thinking and creativity. Choose a future of
              limitless possibilities with Go Smart's holistic approach. Elevate
              your child's journey – where intelligence meets innovation."
            </p>
            <button className="button is-normal is-responsive">
              Get in touch
            </button>
          </div>
        </Slider> */}
      </div>
    </section>
  );
}
