import React from "react";
import { Row, Col } from "react-bootstrap";

import EventCard from "../components/EventCard/EventCard";

const Events = () => {
  return (
    <div>
      <h1>Discover</h1>

      <Row>
        {new Array(6).fill(0).map((dummy, i) => {
          return (
            <Col key={i} md={4} className="mb-3">
              <EventCard />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Events;
