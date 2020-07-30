import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Event from "./components/Event";
import { events } from "./utils";
import navbar from "./assets/navbar.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home";
import Events from "./pages/events";
import Points from "./pages/points";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <img className="navbar-img" src={navbar} alt="Navbar" />
      <hr className="navbar-line" />
      <Row>
        <Col sm={2}>
          <Navbar></Navbar>
        </Col>
        <Col sm={8}>
          <Switch>
            <Route exact component={Home} path="/home"></Route>
            <Route exact component={Events} path="/events"></Route>
            <Route exact component={Points} path="/points"></Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default App;
