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
      showPast: false,
      showUpcoming: true,
      showAll: false,
      showEventPane: false,
      title: "",
      description: "",
      date: "",
      time: "",
      duration: "",
      points: 0,
    };
  }

  showPast() {
    this.setState({
      showPast: true,
      showAll: false,
      showUpcoming: false
    });
  }

  showUpcoming() {
    this.setState({
      showUpcoming: true,
      showPast: false,
      showAll: false
    });
  }

  showAll() {
    this.setState({
      showAll: true,
      showUpcoming: false,
      showPast: false
    })
  }

  showEventPane(title, description, date, time, duration, points) {
    this.setState({
      showEventPane: true,
      title: title,
      description: description,
      date: date,
      time: time,
      duration: duration,
      points: points,
    });
  }

  render() {
    return (
      <Row id="large-row">
        <Col sm={8}>
          <Dashboard
            name={this.props.name}
            points={this.props.points}
            level={this.props.level}
            teammates={this.props.teammates}
          ></Dashboard>

          <Link to="/form" className="float-right">
            <button className="create-event">
              <FiPlus /> Create Event
            </button>
          </Link>

          <h1>My Events</h1>

          <Row className="my-event-tabs">
            <Col md="auto" >
              <p onClick={() => this.showUpcoming()} className={this.state.showUpcoming ? 'active' : ''}>Upcoming</p>
            </Col>
            <Col md="auto">
              <p onClick={() => this.showPast()} className={this.state.showPast ? 'active' : ''}>Past</p>
            </Col>
            <Col md="auto">
              <p onClick={() => this.showAll()} className={this.state.showAll ? 'active' : ''}>All</p>
            </Col>
          </Row>
          {
            this.state.showUpcoming && (
              <Row>
                {this.props.events.map((event, i) => {
                  return (
                    <Col md="4" key={i} className="mb-3">
                      <EventCard
                        showEventPane={this.showEventPane}
                        addPoints={this.props.addPoints}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        time={event.time}
                        duration={event.duration}
                        image={event.image}
                        points={event.points}
                      />
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            this.state.showAll && (
              <Row>
                {this.props.all.map((event, i) => {
                  return (
                    <Col md="4" key={i} className="mb-3">
                      <EventCard
                        showEventPane={this.showEventPane}
                        addPoints={this.props.addPoints}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        time={event.time}
                        duration={event.duration}
                        image={event.image}
                        points={event.points}
                      />
                    </Col>
                  );
                })}
              </Row>
            )
          }

          {
            this.state.showPast && (
              <Row>
                {this.props.past.map((event, i) => {
                  return (
                    <Col md="4" key={i} className="mb-3">
                      <EventCard
                        showEventPane={this.showEventPane}
                        addPoints={this.props.addPoints}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        time={event.time}
                        duration={event.duration}
                        image={event.image}
                        points={event.points}
                      />
                    </Col>
                  );
                })}
              </Row>
            )
          }
        </Col>
        <Col sm={4}>
          {this.state.showEventPane && (
            <EventDetailsPane
              title={this.state.title}
              description={this.state.description}
              date={this.state.date}
              time={this.state.time}
              duration={this.state.duration}
              points={this.state.points}
            />
          )}
        </Col>
      </Row >
    );
  }
}

export default Home;
