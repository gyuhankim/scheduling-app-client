import React from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../actions/Schedule';
import TimeSlot from './TimeSlot';

import '../styles/Schedule.css';

class Schedule extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSchedule());
  }

  render() {
    let timeslots;

    if (this.props.schedule.timeslots.length > 0) {
      timeslots = this.props.schedule.timeslots.map((timeslot, index) => {
        return (
          <TimeSlot key={index}
            id={timeslot.timeID}
            startTime={timeslot.startTime} 
            endTime={timeslot.endTime}
            firstName={timeslot.firstName}
            lastName={timeslot.lastName}
            phoneNumber={timeslot.phoneNumber}
            available={timeslot.available}
          />
        );
      })
      return (
        <div className="schedule">
          {timeslots}
        </div>
      );
    } else {
      return (
        <div className="schedule">
          Loading...
        </div>
      );
    }
    
  }
}

const mapStateToProps = state => ({
  schedule: state.schedule,
  selected: state.schedule.selected
});

export default connect(mapStateToProps)(Schedule);
