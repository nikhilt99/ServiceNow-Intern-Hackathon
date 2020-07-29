import React from "react";
import "./App.css";
import Event from "./components/Event";
import {events} from "./utils"

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Game-Now!</h1>
      <section className="upcoming-events">
        <h2> Upcoming Events</h2>
        <Event name={events.event1[0]} date={events.event1[1]} location={events.event1[2]}/>
      </section>
      <section className="completed-events">
        <h2> Completed Events</h2>
        <Event name={events.event1[0]} date={events.event1[1]} location={events.event1[2]}/>
      </section>
      <section className="past-events">
        <h2> Past Events</h2>
        <Event name={events.event1[0]} date={events.event1[1]} location={events.event1[2]}/>
      </section>
    </div>
  );
}

export default App;
