import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Dashboard.css';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="profile-card">
        <div className="profile-flex">
          <div className="profile-flex-left">
            <div>props.name</div>
            <div className="point-bar">
              <div id="point-flex">
                <div>
                  Social points: <span>props.points</span>
                </div>
                <div>
                  Level <span>props.level</span>
                </div>
              </div>
              <ProgressBar now={60} />
            </div>
            <div>{"Team Members: " + props.teammates}</div>
          </div>
          <div>
            <img src={"../assets/" + props.name.split(" ")[0] + ".jpg"} alt="profile-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard