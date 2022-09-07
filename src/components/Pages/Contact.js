import React from "react";
import Header from "../Shared/Header/Header";
import SideNavBar from "../Shared/Navbar/SideNavBar";
import Content from "../Shared/Content/Content";
import Footer from "../Shared/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="navContentContainer">
        <SideNavBar />
        <Content title="Contact" description="This is Contact page" />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
