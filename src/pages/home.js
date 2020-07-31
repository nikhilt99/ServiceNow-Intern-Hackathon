import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { Row, Col } from "react-bootstrap";
import EventCard from "../components/EventCard/EventCard";

const Home = () => {
  return (
    <>
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
        <Col md={4}>
          <EventCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
