import React from "react";
import "./App.css";
import Event from "./components/Event";
import { events } from "./utils";
import navbar from "./assets/navbar.png";
import sidebar from "./assets/sidebar.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <img className="navbar-img" src={navbar} alt="Navbar" />
      <hr className="navbar-line" />
      <Row>
        <Col sm={2}>
          <img className="sidebar" src={sidebar} alt="Navbar" />
        </Col>
        <Col sm={8}>
          <section className="upcoming-events">
            <h2> Upcoming Events</h2>
            <Event event={events[0]} />
            <br/>
            <hr className="navbar-line" />
          </section>
          <section className="completed-events">
            <h2> Completed Events</h2>
            <Event event={events[1]} />
            <br/>
            <hr className="navbar-line" />
          </section>
          <section className="past-events">
            <h2> Past Events</h2>
            <Event event={events[2]} />
            <br/>
            <hr className="navbar-line" />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default App;
