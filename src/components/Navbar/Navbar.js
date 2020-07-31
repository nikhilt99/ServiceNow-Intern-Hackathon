import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import Home from "./../../assets/home.png";
import Event from "./../../assets/event.png";
import Award from "./../../assets/award.png";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/home"
        id="nav-home"
        className="navbar-item"
        activeClassName="navbar-item--active"
      >
        <div className="navbar-flex active">
          <img src={Home} alt="Home" />
          <div>Home</div>
        </div>
      </NavLink>
      <NavLink
        to="/events"
        id="nav-events"
        className="navbar-item"
        activeClassName="navbar-item--active"
      >
        <div className="navbar-flex mt-4 active">
          <img src={Event} alt="Event" />
          <div>Events</div>
        </div>
      </NavLink>
      <NavLink
        to="/points"
        id="nav-points"
        className="navbar-item"
        activeClassName="navbar-item--active"
      >
        <div className="navbar-flex mt-4 active">
          <img src={Award} alt="Award" />
          <div>Points</div>
        </div>
      </NavLink>
    </nav>
  );
};
export default Navbar;
