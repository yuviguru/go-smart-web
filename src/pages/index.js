import * as React from "react";
import "../styles/global.scss";
import { Router } from "@reach/router";

const Contact = React.lazy(()=>import('../components/ContactSection'));
const About = React.lazy(()=>import('../components/AboutSection'));
const NavigationBar = React.lazy(()=>import('../components/NavigationBar'));

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
)



const Home = () => {
  return (<div className="container">
  </div>);
};

const IndexPage = () => {
  return (
  <div>
    <NavigationBar/>
    <Router>
      <Home path="/" />
      <LazyComponent Component={Contact} path="contact" />
      <LazyComponent Component={About} path="about-us" />
    </Router>
  </div>
  );
}

export const Head = () => <title>Go Smart - Home</title>

export default IndexPage