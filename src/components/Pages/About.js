import React from "react";
import Header from "../Shared/Header/Header";
import SideNavBar from "../Shared/Navbar/SideNavBar";
import Content from "../Shared/Content/Content";
import Footer from "../Shared/Footer/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="navContentContainer">
        <SideNavBar />
        <Content title="About" description="This is About page" />
      </div>
      <Footer />
    </>
  );
};

export default About;
