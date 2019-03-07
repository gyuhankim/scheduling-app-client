import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../actions/Modal';

import '../styles/Timeslot.css';

class TimeSlot extends Component {

  handleModalShow(id) {
    this.props.dispatch(showModal(id));
  }

  render() {
    return (
      <div className="timeslot" onClick={() => this.handleModalShow(this.props.id)}>
        <div className="timeslot-time">{this.props.startTime} to {this.props.endTime}</div>
      </div>
    );
  } 
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(TimeSlot);
