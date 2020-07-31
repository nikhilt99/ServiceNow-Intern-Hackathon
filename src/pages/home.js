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

const Home = (props) => {
  return (
    <div>
      <Dashboard name={props.name} points={props.points} level={props.level} teammates={props.teammates}></Dashboard>
      <button onClick={() => props.addPoints(3)}>add 3 point</button>
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
    </div >
  );
}

export default Home;