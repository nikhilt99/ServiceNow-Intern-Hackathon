import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

import Dashboard from "../components/Dashboard/Dashboard";
import EventCard from "../components/EventCard/EventCard";
import { BsPlus } from 'react-icons/bs'


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
      <button className="create-event"> <BsPlus /> Create Event</button>
      <Row>

        {
          props.events.map(event => {
            return (
              <Col>
                <EventCard title={event.title} description={event.description} date={event.date} time={event.time} />
              </Col>
            )
          })
        }
        <Col>
          <Link to="/form">
            <button className="create-event"><BsPlus /> Create Event
            </button>
          </Link>
          <hr></hr>
          <EventCard />

        </Col>
      </Row>
    </>
  );
};

export default Home;
