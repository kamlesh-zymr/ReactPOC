import React from "react";
import { useNavigate } from "react-router";
import "../../../css/Header/Header.css";
const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="headerComponent">
      <h2
        onClick={() => {
          navigate("/home");
        }}
      >
        DashBoard
      </h2>

      <a href="/home">
        <i className="fa fa-gift"></i>
      </a>
      <button className="logoutBtn" onClick={logOut}>
        Log out
      </button>
    </div>
  );
};

export default Header;
