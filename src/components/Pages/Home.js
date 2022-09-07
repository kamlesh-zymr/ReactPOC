import React from "react";
import Header from "../Shared/Header/Header";
import SideNavBar from "../Shared/Navbar/SideNavBar";
import Content from "../Shared/Content/Content";
import Footer from "../Shared/Footer/Footer";
import "../../css/Pages/Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="navContentContainer">
        <SideNavBar />
        <Content title="Home" description="This is Home page" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
