import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import EventCard from "../components/EventCard/EventCard";

const Home = () => {
  return (
    <div>
      <Dashboard name="Jeffrey Chou" points="375" level="2" teammates="Kenneth Chen, Nikhil Tangella, Jaden Padua"></Dashboard>
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
    </div>
  );
}

export default Home;