import React from 'react';
import './Timeline.css';
import Pill from '../Pill/Pill';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <Pill content={event.date} />
            <div className="content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
