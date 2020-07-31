import React from "react";
import { Row, Col } from "react-bootstrap";

import EventCard from "../components/EventCard/EventCard";
import EventDetailsPane from "../components/EventDetailsPane/EventDetailsPane";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.showEventPane = this.showEventPane.bind(this);
    this.state = {
      showEventPane: false,
      title: "",
      description: "",
      date: "",
      time: "",
      duration: "",
      points: 0,
    }
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
      <div>
        <Row>
          <Col sm={8}>
            <h1 className="title">Discover</h1>
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
        </Row>
      </div >
    );
  }
}

export default Events;
