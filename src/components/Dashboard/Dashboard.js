import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Dashboard.css';
import Jeffrey from "../../assets/jeffrey.jpg";

const Dashboard = (props) => {
  return (
    <div id="Dashboard">
      <link rel="stylesheet" href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"></link>
      <h1 className="title">Dashboard</h1>
      <div className="profile-card">
        <div className="profile-flex">
          <div className="profile-flex-left">
            <div id="profile-name">{props.name}</div>
            <div className="point-bar">
              <div id="point-flex">
                <div>
                  Social points: <span>{props.points}</span>
                </div>
                <div>
                  Level <span>{Math.floor(props.points / 20)}</span>
                </div>
              </div>
              <ProgressBar now={props.points % 20 * 5} />
            </div>
            <div>{"Team Members: " + props.teammates}</div>
          </div>
          <div className="profile-flex-right">
            <img className="profile-img" src={Jeffrey} alt="profile-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard