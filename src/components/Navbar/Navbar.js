import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Nav">
      <div className="Nav_container">
        <Link to="/home" className="nav-a" id="nav-home">
          <div className="navbar-item">
            <div className="navbar-flex">
              <img src={require("./../../assets/home.png")}></img>
              <div>Home</div>
            </div>
          </div>
        </Link>
        <Link to="/events" className="nav-a" id="nav-events">
          <div className="navbar-item">
            <div className="navbar-flex">
              <img src={require("./../../assets/event.png")}></img>
              <div>Events</div>
            </div>
          </div>
        </Link>
        <Link to="/points" className="nav-a" id="nav-points">
          <div className="navbar-item">
            <div className="navbar-flex">
              <img src={require("./../../assets/award.png")}></img>
              <div>Points</div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;