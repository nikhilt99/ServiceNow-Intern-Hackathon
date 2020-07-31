import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FiVideo, FiUpload, FiCheck } from "react-icons/fi";

import "./EventCard.css";

const EventCard = (props) => {
  const [uploadBtnColor, setUploadBtnColor] = useState("f7f7f7");
  const [checkBtnDisable, setCheckBtnDisable] = useState(false);

  const updateColor = () => {
    setUploadBtnColor("#CDE0D8");
  };

  return (
    <Card
      onClick={() =>
        props.showEventPane(
          props.title,
          props.description,
          props.date,
          props.time,
          props.duration,
          props.points
        )
      }
      style={{ width: "15rem" }}
    >
      <Row className="btn-tray">
        <Col md="auto">
          <Button
            variant="light"
            className="btn-event-action rounded-circle"
            onClick={updateColor}
            style={{ backgroundColor: uploadBtnColor }}
          >
            <FiUpload />
          </Button>
        </Col>
        <Col md="auto">
          <Button
            onClick={() => {
              props.addPoints(props.points);
              setCheckBtnDisable(true);
            }}
            variant="light"
            className="btn-event-action rounded-circle"
            disabled={checkBtnDisable}
          >
            <FiCheck />
          </Button>
        </Col>
      </Row>
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="pt-5">
        <Card.Subtitle>{props.date + " " + props.time}</Card.Subtitle>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text id="elipse">{props.description} </Card.Text>
        <Row className="align-items-center">
          <Col as={Row}>
            {[
              ["#EB5757", "A"],
              ["#20CE99", "B"],
              ["#777777", "G"],
            ].map((info, i) => {
              return (
                <Col className="profile-items pr-0" md="auto" key={i}>
                  <div
                    className="rounded-circle participant-profile"
                    style={{ backgroundColor: info[0] }}
                  >
                    {info[1]}
                  </div>
                </Col>
              );
            })}
          </Col>
          <Col md="auto">
            <a href="https://servicenow.zoom.us">
              <Button variant="primary btn-join">
                <FiVideo className="fi-video-icon" />
              Join
            </Button>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
