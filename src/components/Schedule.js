import React from 'react';
import { connect } from 'react-redux';
import { getSchedule } from '../actions/Schedule';
import TimeSlot from './TimeSlot';

import '../styles/Schedule.css';

class Schedule extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSchedule());
  }

  handleClick() {
    console.log(this.props.schedule);
  }

  render() {
    let timeslots;

    if (this.props.schedule) {
      timeslots = this.props.schedule.timeslots.map(timeslot => {
        return (
          <TimeSlot startTime={timeslot.startTime} endTime={timeslot.endTime} />
        );
      })
    }

    return (
      <div className="schedule">
        <button onClick={() => this.handleClick()}>Click me!</button>
        {timeslots}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  schedule: state.schedule
});

export default connect(mapStateToProps)(Schedule);