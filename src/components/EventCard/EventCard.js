import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FiVideo, FiUpload, FiStar } from "react-icons/fi";

import "./EventCard.css";

const EventCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Row className="btn-tray">
        <Col md="auto">
          <Button variant="light" className="btn-event-action rounded-circle">
            <FiUpload />
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="light" className="btn-event-action rounded-circle">
            <FiStar />
          </Button>
        </Col>
      </Row>
      <Card.Img variant="top" src="https://source.unsplash.com/random" />
      <Card.Body className="pt-5">
        <Card.Subtitle>{props.event.date}</Card.Subtitle>
        <Card.Title>{props.event.title}</Card.Title>
        <Card.Text>
          {props.event.text}
        </Card.Text>
        <Row className="align-items-center">
          <Col as={Row}>
            {["#EB5757", "#20CE99", "#777777"].map((backgroundColor, i) => {
              return (
                <Col className="profile-items pr-0" md="auto">
                  <div
                    key={i}
                    className="rounded-circle participant-profile"
                    style={{ backgroundColor }}
                  />
                </Col>
              );
            })}
          </Col>
          <Col md="auto">
            <Button variant="primary btn-join">
              <FiVideo className="fi-video-icon" />
              Join
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
