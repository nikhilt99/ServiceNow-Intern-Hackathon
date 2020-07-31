import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"
import FormControl from "react-bootstrap/FormControl";
import { Card, Button, Row, Col } from "react-bootstrap";

function logFormData(addEvent) {

  var title = document.getElementById("formTitle").value;
  var description = document.getElementById("formDescription").value;
  var date = document.getElementById("formDate").value;
  var time = document.getElementById("formTime").value;
  var duration = document.getElementById("formDuration").value;
  var participants = parseInt(document.getElementById("formParticipants").value);
  var points = parseInt(document.getElementById("formPointValue").value);
  var image = document.getElementById("formImgSource").value;
  addEvent(title, description, date, time, duration, participants, points, image);
}

const Forms = (props) => {
  return (
    <div>
      <h1 className="title">Create Event</h1>
      <Form>
        <Row>
          <Col md="3">
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md="3">
            <Form.Group controlId="formDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="text"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="formTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="text"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group controlId="formDuration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md="3">
            <Form.Group controlId="formParticipants">
              <Form.Label>Participants</Form.Label>
              <Form.Control
                type="text"
              />
              <Form.Text className="text-muted">
                please enter in the @servicenow.com emails of your desired particpants in comma seperated values
          </Form.Text>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group controlId="formPointValue">
              <Form.Label>Point Value</Form.Label>
              <Form.Control
                type="text"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="9">
            <Form.Group controlId="formImgSource">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                type="text"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>

        </Row>

        <Link to="/home">
          <button className="create-event" onClick={() => logFormData(props.addEvent)}> Submit
            </button>
        </Link>
      </Form>
    </div>
  );
};

export default Forms;
