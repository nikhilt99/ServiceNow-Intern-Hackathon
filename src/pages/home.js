import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";

import Dashboard from "../components/Dashboard/Dashboard";
import EventCard from "../components/EventCard/EventCard";
import EventDetailsPane from "../components/EventDetailsPane/EventDetailsPane";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.showEventPane = this.showEventPane.bind(this);
    this.state = {
      showEventPane: false,
      title: "",
      description: "",
      date: "",
      time: "",
      duration: 0,
      points: 0
    };
  }

  showEventPane(title, description, date, time, duration, points) {
    this.setState({
      showEventPane: true,
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      points: points
    });
  }

  render() {
    return (
      <Row>
        <Col sm={6}>
          <Dashboard name={this.props.name} points={this.props.points} level={this.props.level} teammates={this.props.teammates}></Dashboard>

          <h1>My Events</h1>

          <Link to="/form">
            <button className="create-event float-right">
              <FiPlus /> Create Event
      </button>
          </Link>

          <Row className="my-event-tabs">

            <Col md="auto">
              <p className="active">Upcoming</p>
            </Col>
            <Col md="auto">
              <p>Past</p>
            </Col>
            <Col md="auto">
              <p>All</p>
            </Col>

          </Row>
          <Row>
            {
              this.props.events.map(event => {
                return (
                  <Col md="4">
                    <EventCard showEventPane={this.showEventPane} addPoints={this.props.addPoints} title={event.title} description={event.description} date={event.date} time={event.time} image={event.image} points={event.points} />
                  </Col>
                )
              })
            }
          </Row>
        </Col>
        <Col sm={4}>
          {this.state.showEventPane && <EventDetailsPane title={this.state.title} description={this.state.description} date={this.state.date} time={this.state.time} duration={this.state.duration} points={this.state.points} />}
        </Col>
      </Row>
    );
  }
}

export default Home;
