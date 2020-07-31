import React from "react";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom"
import FormControl from "react-bootstrap/FormControl";

const logFormData = () => {


  const inputData = {
    Title: document.getElementById("formTitle").value,
    Description: document.getElementById("formDescription").value,
    Date: document.getElementById("formDate").value,
    Time: document.getElementById("formTime").value,
    Duration: document.getElementById("formDuration").value,
    Participants: document.getElementById("formParticipants").value,
    PointValue: document.getElementById("formPointValue").value
  }
  console.log(inputData)
  return inputData

}



const Forms = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title for event" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter event description" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter date event will take place"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formTime">
          <Form.Label>Event Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter time event will take place"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDuration">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" placeholder="Enter duration of event" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formParticipants">
          <Form.Label>Participants</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the emails of your event participants"
          />
          <Form.Text className="text-muted">
            please enter in the @servicenow.com emails of your desired particpants in comma seperated values
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPointValue">
          <Form.Label>Point Value</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter point value you believe this event should be worth"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Link to="/home">
            <button className="create-event" onClick={logFormData}> Submit 
            </button>
          </Link>
      </Form>
    </div>
  );
};

export default Forms;
