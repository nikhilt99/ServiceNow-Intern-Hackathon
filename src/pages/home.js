import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { Row, Col } from "react-bootstrap";
import "./index.css"

import EventCard from "../components/EventCard/EventCard";
import {BsPlus} from 'react-icons/bs'

const Home = (props) => {
  return (
    <>
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
        <button className="create-event"> <BsPlus/> Create Event</button>
        <hr />
        <Col md={4}>
          <EventCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
