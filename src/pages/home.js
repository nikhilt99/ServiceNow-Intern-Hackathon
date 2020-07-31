import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";

import Dashboard from "../components/Dashboard/Dashboard";
import EventCard from "../components/EventCard/EventCard";

const Home = (props) => {
  return (
    <>
      <Dashboard
        name={props.name}
        points={props.points}
        level={props.level}
        teammates={props.teammates}
      ></Dashboard>

      <button className="create-event float-right">
        <FiPlus /> Create Event
      </button>
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

        <Link to="/form"></Link>
      </Row>
      <Row>
        {props.events.map((event) => {
          return (
            <Col md="4">
              <EventCard
                addPoints={props.addPoints}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                image={event.image}
                points={event.points}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
