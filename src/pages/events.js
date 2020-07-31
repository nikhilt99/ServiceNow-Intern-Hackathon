import React from "react";
import { Row, Col } from "react-bootstrap";

import EventCard from "../components/EventCard/EventCard";

const Events = (props) => {
  return (
    <div>
      <Row>
        <Col sm={8}>
          <h1>Discover</h1>
          <Row>
            {
              props.events.map((event, i) => {
                return (
                  <Col key={i} md={4} className="mb-3">
                    <EventCard addPoints={props.addPoints} title={event.title} description={event.description} date={event.date} time={event.time} image={event.image} points={event.points} />
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Events;
