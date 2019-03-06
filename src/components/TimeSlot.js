import React, { Component } from 'react';

import '../styles/Timeslot.css';

function TimeSlot(props) {
  return (
    <div className="TimeSlot">
      <div className="timeslot-time">{props.startTime} to {props.endTime}</div>
    </div>
  );
}

export default TimeSlot;
