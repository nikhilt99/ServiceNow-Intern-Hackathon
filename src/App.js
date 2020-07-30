import React, { useState } from "react";
import "./App.css";
import Event from "./components/Event";
import { events } from "./utils";
import navbar from "./assets/navbar.png";
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dashboard from "./components/Dashboard/Dashboard";
import sidebar from "./assets/sidebar.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [EventType, setEventValue] = useState('1');

  const Events = [
    { name: 'Upcoming', value: '1' },
    { name: 'Past', value: '2' },
    { name: 'All', value: '3' },
  ];

  return (
    <div className="App">
      <img className="navbar-img" src={navbar} alt="Navbar" />
      <hr className="navbar-line" />

      
      
     
      <Row>
        <Col sm={2}>
          <img className="sidebar" src={sidebar} alt="Navbar" />
        </Col>
        <Col sm={8}>
          <Dashboard name="Jeffrey Chou" points="375" level="2" teammates="Kenneth Chen, Nikhil Tangella, Jaden Padua"></Dashboard>
         
          <h2>My Events</h2>



        <ButtonGroup toggle className="mb-2">
        <ToggleButton
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
         

        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup toggle>
        {Events.map((event, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={event.value}
            checked={EventType === event.value}
            onChange={(e) => setEventValue(e.currentTarget.value)}
          >
            {event.name}
          </ToggleButton>
        ))}
      </ButtonGroup>




      {(function() {
        switch (EventType) {
          case '1':
            return <div>
            <Event event={events[0]} /> </div>;
          case '2':
            return  <div><Event event={events[1]} /></div>;
          case '3':
            return <div><Event event={events[2]}/></div>;
          default:
            return null;
        }
      })()}
    
          <br/>
          <hr className="navbar-line" />

          <h2>Discover</h2>
        <Event event={events[0]} />
      
          <br/>
          <hr className="navbar-line" />








        </Col>
      </Row>
      

    </div>
  );
};

export default App;
