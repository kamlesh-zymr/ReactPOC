import React from "react";
import Header from "./Header";
import SideNavBar from "./SideNavBar";
import Content from "./Content";
import Footer from "./Footer";
import "../css/Home.css";
const Home = () => {
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

export default Home;
