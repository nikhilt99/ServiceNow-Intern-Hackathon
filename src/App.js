import React from "react";
import "./App.css";
import Event from "./components/Event";
import { events } from "./utils";
import navbar from "./assets/navbar.png";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <img className="navbar-img" src={navbar} alt="Navbar" />
      <hr className="navbar-line" />
      <h1>Welcome to Game-Now!</h1>
      <section className="upcoming-events">
        <h2> Upcoming Events</h2>

        <Event event={events[0]} />
      </section>
      <section className="completed-events">
        <h2> Completed Events</h2>
        <Event event={events[1]} />
      </section>
      <section className="past-events">
        <h2> Past Events</h2>
        <Event event={events[2]} />
      </section>
    </div>
  );
};

export default App;
