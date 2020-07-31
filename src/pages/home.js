import React, {useState} from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import EventCard from "../components/EventCard/EventCard";

const data2 = {
    date: "Tue, Aug 4, 2020 12:30 AM PST",
    title: "UX QE Intern Lunch",
    text: "Come join us at our weekly luncheon with your fellow interns!"
};
const upcomingEvents = [{
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Upcoming 1",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Upcoming 2",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}];
const pastEvents = [{
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 1",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 2",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 3",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 4",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}];
const allEvents = [{
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 1",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 2",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 3",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 4",
  text: "Come join us at our weekly luncheon with your fellow interns!"
},{
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 3",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}, {
  date: "Tue, Aug 4, 2020 12:30 AM PST",
  title: "Event 4",
  text: "Come join us at our weekly luncheon with your fellow interns!"
}];


const Home = () => {
  const [radioValue, setRadioValue] = useState('1');
  console.log(radioValue);

  function handlerFunc() {
    setRadioValue("1");
  }
  function handlerFunc2() {
    setRadioValue("2");
  }
  function handlerFunc3() {
    setRadioValue("3");
  }
  
  return (
    <div>
      <Dashboard name="Jeffrey Chou" points="375" level="2" teammates="Kenneth Chen, Nikhil Tangella, Jaden Padua"></Dashboard>
      <h1>My Events</h1>
      <Row className="my-event-tabs">
        <Col md="auto">
          <p onClick= {handlerFunc} className="active">Upcoming</p>
        </Col>
        <Col md="auto">
          <p onClick= {handlerFunc2}>Past</p>
        </Col>
        <Col md="auto">
          <p onClick= {handlerFunc3}>All</p>
        </Col>
      </Row>
      {(function() {
        if (radioValue === "1") {
          return <div>
          <Row>
           {upcomingEvents.map((value, i) => {
             return (
                <Col key={i} md={4}>
                  <EventCard event={data2}/>
                </Col>
             );
           })}
          </Row>
    </div>
        } else if (radioValue === "2") {
            return <div>
                  <Row>
                   {pastEvents.map((value, i) => {
                     return (
                        <Col key={i} md={4}>
                          <EventCard event={data2}/>
                        </Col>
                     );
                   })}
                  </Row>
            </div>
        } else {
          return <div>
          <Row>
           {allEvents.map((value, i) => {
             return (
                <Col key={i} md={4}>
                  <EventCard event={data2}/>
                </Col>
             );
           })}
          </Row>
    </div>
        }
      })()}
    </div>
  );
}

export default Home;