import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { events } from "./utils";
import navbar from "./assets/navbar.png";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Points from "./pages/Points";

import { Row, Col } from "react-bootstrap";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img className="navbar-img" src={navbar} alt="Navbar" />
      <hr className="navbar-line" />
      <Row className="mb-4">
        <Col sm={2}>
          <Navbar />
        </Col>
        <Col md={7}>
          <Switch>
            <Route exact component={Home} path="/home"></Route>
            <Route exact component={Events} path="/events"></Route>
            <Route exact component={Points} path="/points"></Route>
          </Switch>
        </Col>
        <Col>
          <div
            style={{ width: "100%", height: "1000%", backgroundColor: "red" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
