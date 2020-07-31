import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FiVideo, FiUpload, FiCheck } from "react-icons/fi";

import "./EventCard.css";

const EventCard = () => {
  return (
    <Card style={{ width: "17rem" }}>
      <Row className="btn-tray">
        <Col md="auto">
          <Button variant="light" className="btn-event-action rounded-circle">
            <FiUpload />
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="light" className="btn-event-action rounded-circle">
            <FiCheck />
          </Button>
        </Col>
      </Row>
      <Card.Img variant="top" src="https://source.unsplash.com/random" />
      <Card.Body className="pt-5">
        <Card.Subtitle>Tue, Aug 4, 2020 12:30 AM PST</Card.Subtitle>
        <Card.Title>UX QE Intern Lunch</Card.Title>
        <Card.Text>
          Come join us at our weekly luncheon with your fellow interns!
        </Card.Text>
        <Row className="align-items-center">
          <Col as={Row}>
            {["#EB5757", "#20CE99", "#777777"].map((backgroundColor, i) => {
              return (
                <Col className="profile-items pr-0" md="auto" key={i}>
                  <div
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
