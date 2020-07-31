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
    this.addDiscover = this.addDiscover.bind(this);
    this.state = {
      name: "Jeffrey Chou",
      points: 112,
      teammates: "Kenneth Chen, Nikhil Tangella, Jaden Padua",
      events: [],
      discover: [],
      past: [],
      all: []
    };
  }

  componentDidMount() {
    this.addEvent(
      "Intern Coffee Chat",
      "Stir up some friendships!",
      "Mon, August 15, 2020",
      "12:00 PM PST",
      "1 hour 30min",
      3,
      10,
      "https://images.unsplash.com/photo-1572373696785-e8bd92718f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );
    this.addEvent(
      "Summer Coach",
      "Meet and greet!",
      "Mon, August 23, 2020",
      "10:30 AM PST",
      "1 hours",
      3,
      8,
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60s"
    );
    this.addEvent(
      "Exec Speaker Series",
      "Learn and grow with us!",
      "Tue, December 1, 2020",
      "12:00 PM PST",
      "1 hour",
      3,
      22,
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );



    this.addPast(
      "Smash Tournament",
      "Let's get smashing!",
      "Mon, Jul 30, 2020",
      "2:00 PM PST",
      "1 hour 30 min",
      3,
      20,
      "https://images.unsplash.com/photo-1566576912289-cc48894ec413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    );


    this.addPast(
      "Intern Tech Talk",
      "Learn with other interns!",
      "Mon, Jun 29, 2020",
      "12:00 PM PST",
      "1 hour 30 min",
      3,
      15,
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    );

    this.addPast(
      "Intern Orientation",
      "Welcome aboard!",
      "Mon, Jun 22, 2020",
      "9:00 AM PST",
      "5 hours",
      3,
      25,
      "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    );




    this.addDiscover(
      "Talent Show",
      "Show us what you got!",
      "Fri, Sep 23, 2020",
      "6:00 PM PST",
      "1 hour 30min",
      3,
      25,
      "https://images.unsplash.com/photo-1565798846807-2af22c843402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );

    this.addDiscover(
      "Game Night",
      "Calling all gamers",
      "Mon, Sep 4, 2020",
      "7:00 PM PST",
      "2 hours",
      3,
      10,
      "https://images.unsplash.com/photo-1523843268911-45a882919fec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );
    this.addDiscover(
      "Team Workout",
      "Get gains with the team!",
      "Fri, Aug 23, 2020",
      "2:00 PM PST",
      "2 hours",
      3,
      15,
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );
    this.addDiscover(
      "Team Tea Time",
      "Relax with some tea!",
      "Thurs, Aug 19, 2020",
      "5:00 PM PST",
      "30 min",
      3,
      10,
      "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );
    this.addDiscover(
      "Scavenger Hunt",
      "Search for fun!",
      "Tue, Aug 14, 2020",
      "4:00 PM PST",
      "1 hours",
      3,
      5,
      "https://images.unsplash.com/photo-1576579310188-eef1e26e417a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );
    this.addDiscover(
      "Movie Night",
      "Watch with the team!",
      "Tue, Aug 6, 2020",
      "8:00 PM PST",
      "3 hours",
      3,
      20,
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    );
  }

  addPoints(pointValue) {
    this.setState({ points: this.state.points + pointValue });
  }

  addDiscover(
    title,
    description,
    date,
    time,
    duration,
    participants,
    points,
    image
  ) {
    var newDiscover = this.state.discover;
    newDiscover.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image,
    });
    this.setState({
      discover: newDiscover
    });
  }

  addPast(
    title,
    description,
    date,
    time,
    duration,
    participants,
    points,
    image
  ) {
    var newPast = this.state.past;
    newPast.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image,
    });
    var newAll = this.state.all;
    newAll.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image,
    });
    this.setState({
      past: newPast,
      all: newAll
    });
  }

  addEvent(
    title,
    description,
    date,
    time,
    duration,
    participants,
    points,
    image
  ) {
    var newEvents = this.state.events;
    newEvents.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image,
    });
    var newAll = this.state.all;
    newAll.push({
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      participants: participants,
      points: points,
      image: image,
    });
    this.setState({
      events: newEvents,
      all: newAll
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
          <Col md={10}>
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
                    past={this.state.past}
                    all={this.state.all}
                  ></Home>
                )}
                path="/home"
              ></Route>
              <Route
                exact
                render={(routeProps) => (
                  <Events
                    {...routeProps}
                    addPoints={this.addPoints}
                    events={this.state.discover}
                  ></Events>
                )}
                path="/events"
              ></Route>
              <Route exact component={Points} path="/points"></Route>
              <Route
                exact
                render={(routeProps) => (
                  <Forms {...routeProps} addEvent={this.addEvent}></Forms>
                )}
                path="/form"
              ></Route>
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
