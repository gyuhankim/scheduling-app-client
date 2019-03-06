import React, { Component } from 'react';

import '../styles/TimeSlot.css';

class TimeSlot extends Component {
  render() {
    return (
      <div className="TimeSlot">
      
          <div className="form-container">
            <Form />
          </div>

          <div className="schedule-container">
            <Schedule test="wordup g" />
          </div>

      </div>
    );
  }
}

export default TimeSlot;
