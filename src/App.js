import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { events } from "./utils";
import navbar from "./assets/navbar.png";
import Navbar from "./components/Navbar/Navbar"

import Home from "./pages/home";
import Events from "./pages/events";
import Points from "./pages/points";
import Topbar from "./components/Topbar/Topbar";
import Forms from "./pages/forms";

import { Row, Col } from "react-bootstrap";

import "./App.css";

class App extends React.Component {


  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.addPoints = this.addPoints.bind(this);
    this.addDiscover = this.addDiscover.bind(this);
    this.state = {
      name: "Jeffrey Chou",
      points: 112,
      teammates: "Kenneth Chen, Nikhil Tangella, Jaden Padua",
      events: [],
      discover: []
    };
  }

  componentDidMount() {
    this.addEvent("test event", "description", "10/10/2020", "9:00 - 10:00", "1 hour", 3, 3, "https://images.unsplash.com/photo-1595053826286-2e59efd9ff18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max");
  }

  addPoints(pointValue) {
    this.setState({ points: this.state.points + pointValue });
  }

  addDiscover(title, description, date, time, duration, participants, points, image) {
    var newDiscover = this.state.discover;
    newDiscover.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image
    });
    this.setState({
      discoer: newDiscover
    });
  }

  addEvent(title, description, date, time, duration, participants, points, image) {
    var newEvents = this.state.events;
    newEvents.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image
    });
    this.setState({
      events: newEvents
    });
  }

  render() {
    return (
      <div className="App" >
        <Topbar></Topbar>
        <Row>
          <Col sm={2}>
            <Navbar />
          </Col>
          <Col md={7}>
            <Switch>
              <Route exact render={(routeProps) => (
                <Home {...routeProps} addEvent={this.addEvent} addPoints={this.addPoints} name={this.state.name} points={this.state.points} teammates={this.state.teammates} events={this.state.events}></Home>
              )} path="/home"></Route>
              <Route exact component={Events} path="/events"></Route>
              <Route exact component={Points} path="/points"></Route>
              <Route exact component={Forms} path="/form"></Route>
            </Switch>
          </Col>
          <Col>
            <div
              style={{ width: "100%", height: "1000%", backgroundColor: "red" }}
            />
          </Col>
        </Row>
      </div >
    );
  }
}

export default App;
