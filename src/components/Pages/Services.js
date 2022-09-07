import React from "react";
import Header from "../Shared/Header/Header";
import SideNavBar from "../Shared/Navbar/SideNavBar";
import Content from "../Shared/Content/Content";
import Footer from "../Shared/Footer/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <div className="navContentContainer">
        <SideNavBar />
        <Content title="Services" description="This is Services page" />
      </div>
      <Footer />
    </>
  );
};

export default Services;
