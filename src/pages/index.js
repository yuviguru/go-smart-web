import React, { useEffect } from "react";
import "../styles/global.scss";
import Home from "../components/HomeSection";
import smoothscroll from "smoothscroll-polyfill";
import "@fontsource/roboto";


const Contact = React.lazy(()=>import('../components/ContactSection'));
const About = React.lazy(()=>import('../components/AboutSection'));
const NavigationBar = React.lazy(()=>import('../components/NavigationBar'));
const Courses = React.lazy(()=>import('../components/CourseSection'));
const Engagements = React.lazy(()=>import('../components/EngagementSection'));
const Institution = React.lazy(()=>import('../components/InstitutionSection'));
const Testimonials = React.lazy(()=>import('../components/TestimonialSection'));

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
)


const IndexPage = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  return (
  <div className="body-container">
    <NavigationBar/>
    <div className="page-container">
      <Home />
      <About />
      <Courses />
      <Engagements type="typeOne"/>
      <Engagements type="typeTwo"/>
      <Institution />
      <Testimonials/>
      <Contact />
    </div>
  </div>
  );
}

export const Head = () => (
  <>
    <title>Go Smart - Home</title>
    <body className="has-navbar-fixed-top" />
  </>
)


export default IndexPage