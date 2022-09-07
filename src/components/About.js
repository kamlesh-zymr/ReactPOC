import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SideNavBar from "./SideNavBar";

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SideNavBar />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default About;
