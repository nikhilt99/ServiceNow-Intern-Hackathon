import React from "react";
import "./App.css";
import Event from "./components/Event";
import { events } from "./utils";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Social NOW</Navbar.Brand>
      <Navbar.Brand href="#home">Social NOW</Navbar.Brand>s
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
      </Navbar>

      <h1>Welcome to Game-Now!</h1>
      <section className="upcoming-events">
        <h2> Upcoming Events</h2>

        <Event event={events[0]}/>
      </section>
      <section className="completed-events">
        <h2> Completed Events</h2>
        <Event event={events[1]}/>
      </section>
      <section className="past-events">
        <h2> Past Events</h2>
        <Event event={events[2]}/>
      </section>
    </div>
  );
};

export default App;
