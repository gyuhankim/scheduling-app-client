import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/Modal';
import { selectTimeSlot } from '../actions/Schedule';

import '../styles/Timeslot.css';

class TimeSlot extends Component {

  handleModalShow() {
    this.props.dispatch(showModal());
    this.props.dispatch(selectTimeSlot({...this.props, editable: false}));
  }

  render() {
    return (
      <div className={this.props.available ? "timeslot-available" : "timeslot-unavailable"} 
        onClick={() => this.handleModalShow()}>
        <div className="timeslot-time">{this.props.startTime} to {this.props.endTime}</div>
      </div>
    );
  } 
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(TimeSlot);
