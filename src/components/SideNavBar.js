import React, { useState } from "react";
import { NavItems } from "./NavItems";
import "../css/SideNavBar.css";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  const [state, setState] = useState(false);
  const handleBurgerClick = () => {
    setState(!state);
  };
  return (
    <div className="sideNavBar">
      <nav>
        <div className="hamburgerMenu" onClick={handleBurgerClick}>
          <i className={state ? `fas fa-times` : `fas fa-bars`}></i>
        </div>
        <ul className={state ? `navMenu active` : `navMenu`}>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
