import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Topbar.css';
import Jeffrey from "../../assets/jeffrey.jpg";

const Topbar = (props) => {
  return (
    <div className="top-bar">
      <div id="icon">
        <img src={require("../../assets/logo.png")}></img>
        <div>Social</div>
        <input value="Search events" type="search"></input>
      </div>
      <img id="profile-top" src={require("../../assets/jeffrey.jpg")}></img>
    </div>
  );
}
export default Topbar