import React from "react";
import { Row, Col } from "react-bootstrap";
import { } from "react-icons/fi";
import "./EventDetailsPane.css";

const EventDetailsPane = (props) => {
  return (
    <aside className="event-details__container shadow">
      <h1 className="event-details__title">{props.title}</h1>
      <p className="event-details__description">
        {props.description}
      </p>

      <h2 className="event-details__field-name text-primary mb-3">
        Participants
      </h2>
      <Row>
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
        <Col>
          <div className="rounded-circle participant-profile bg-primary">
            +17
          </div>
        </Col>
      </Row>

      <h2 className="event-details__field-name">Date</h2>
      <p className="event-details__field-value">{props.date}</p>

      <h2 className="event-details__field-name">Time</h2>
      <p className="event-details__field-value">{props.time}</p>

      <h2 className="event-details__field-name">Duration</h2>
      <p className="event-details__field-value">{props.duration}</p>

      <h2 className="event-details__field-name">Social Points</h2>
      <p className="event-details__field-value">{props.points}</p>
    </aside>
  );
};

export default EventDetailsPane;
