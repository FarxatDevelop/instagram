import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Socials from "./socials";

function Navbar() {
  return (
    <nav>
      <div className="nav-width">
        <div className="nav-left">
          <div className="logo">
            <h1>LUMIA</h1>
          </div>
        </div>
        <div className="nav-right">
          <ul className="menu">
            <li>
              <NavLink to={"#home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"#about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"#services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"#portfolio"}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to={"#testiminals"}>Testiminals</NavLink>
            </li>
            <li>
              <NavLink to={"#drop"}>Drop down</NavLink>
            </li>
            <li>
              <NavLink to={"#ontact"}>Contact</NavLink>
            </li>
          </ul>
          <Socials fontSize="16px" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
