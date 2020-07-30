import React from "react";
import { events } from "./utils";
import navbar from "./assets/navbar.png";
import Dashboard from "./components/Dashboard/Dashboard";
import sidebar from "./assets/sidebar.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import Event from "./components/Event";
import EventCard from "./components/EventCard/EventCard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img className="navbar-img" src={navbar} alt="Navbar" />
      <hr className="navbar-line" />
      <Row>
        <Col md={2}>
          <img className="sidebar" src={sidebar} alt="Navbar" />
        </Col>
        <Col md={8}>
          <Dashboard
            name="Jeffrey Chou"
            points="375"
            level="2"
            teammates="Kenneth Chen, Nikhil Tangella, Jaden Padua"
          ></Dashboard>

          <h1>My Events</h1>

          <Row className="my-event-tabs">
            <Col md="auto">
              <p className="active">Upcoming</p>
            </Col>
            <Col md="auto">
              <p>Past</p>
            </Col>
            <Col md="auto">
              <p>All</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <EventCard />
            </Col>
          </Row>

          <section className="upcoming-events">
            <h2> Upcoming Events</h2>
            <Event event={events[0]} />
            <br />
            <hr className="navbar-line" />
          </section>
          <section className="completed-events">
            <h2> Completed Events</h2>
            <Event event={events[1]} />
            <br />
            <hr className="navbar-line" />
          </section>
          <section className="past-events">
            <h2> Past Events</h2>
            <Event event={events[2]} />
            <br />
            <hr className="navbar-line" />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default App;
