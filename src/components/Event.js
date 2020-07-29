import React from 'react';

const Event = (props) => {
    return (
        <div>
        <div>Event</div>
        <div>{props.event.name}</div>
        <div>{props.event.date}</div>
        <div>{props.event.location}</div>
        <button>Completed</button>
        </div>
    );
}
export default Event