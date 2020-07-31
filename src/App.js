import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./App.css";

import { events } from "./utils";
import Navbar from "./components/Navbar/Navbar";
import EventDetailsPane from "./components/EventDetailsPane/EventDetailsPane";

import Home from "./pages/home";
import Events from "./pages/events";
import Points from "./pages/points";
import Topbar from "./components/Topbar/Topbar";
import Forms from "./pages/forms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.addPoints = this.addPoints.bind(this);
    this.state = {
      name: "Jeffrey Chou",
      points: 12312,
      teammates: "Kenneth Chen, Nikhil Tangella, Jaden Padua",
      events: [],
    };
  }

  componentDidMount() {
    this.addEvent(
      "test event",
      "description",
      "10/10/2020",
      "9:00 - 10:00",
      "1 hour",
      3,
      3
    );
  }

  addPoints(pointValue) {
    this.setState({ points: this.state.points + pointValue });
  }

  addEvent(title, description, date, time, duration, participants, points) {
    var newEvents = this.state.events;
    newEvents.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
    });
    this.setState({
      events: newEvents,
    });
  }

  render() {
    return (
      <div className="App">
        <Topbar></Topbar>
        <Row>
          <Col sm={2}>
            <Navbar />
          </Col>
          <Col md={7}>
            <Switch>
              <Route
                exact
                render={(routeProps) => (
                  <Home
                    {...routeProps}
                    addEvent={this.addEvent}
                    addPoints={this.addPoints}
                    name={this.state.name}
                    points={this.state.points}
                    teammates={this.state.teammates}
                    events={this.state.events}
                  ></Home>
                )}
                path="/home"
              ></Route>
              <Route exact component={Events} path="/events"></Route>
              <Route exact component={Points} path="/points"></Route>
              <Route exact component={Forms} path="/form"></Route>
            </Switch>
          </Col>
          <Col>
            <EventDetailsPane />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
