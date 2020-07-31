import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
const Forms = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" placeholder="Enter title for event" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" placeholder="Enter event description" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter date event will take place"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Event Time</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter time event will take place"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="email" placeholder="Enter duration of event" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formParticipants">
          <Form.Label>Participants</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter the emails of your event participants"
          />
          <Form.Text className="text-muted">
            please enter in the @servicenow.com emails of your desired particpants in comma seperated values
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPointValue">
          <Form.Label>Point Value</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter point value you believe this event should be worth"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <button className="create-event"> Submit </button>
      </Form>
    </div>
  );
};

export default Forms;
