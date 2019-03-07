import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/Modal';
import Form from './Form';
import { updateSchedule, makeEditable } from '../actions/Schedule';

import '../styles/Modal.css';

class Modal extends Component {

  handleCloseButtonClick() {
    this.props.dispatch(hideModal());
  }

  handleCancelClick() {
    this.props.dispatch(updateSchedule({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      available: true,
      timeID: this.props.selected.id
    }))
    this.props.dispatch(hideModal())
  }

  handleEditClick() {
    this.props.dispatch(makeEditable(true))
  }

  render() {

    let timeslot = this.props.selected;

    if (this.props.selected.available || this.props.selected.editable) {
      return (
        <div className="modal">
          { this.props.isShowing &&
            <div>
              <div className="modal-backdrop" onClick={() => this.handleCloseButtonClick()}></div>
              <div className="modal-content">
                <i className="fas fa-times fa-2x close-button" onClick={() => this.handleCloseButtonClick()}></i>
                <h3>Schedule for:</h3>
                <h3>{timeslot.startTime} - {timeslot.endTime}</h3>
                <Form />
              </div>
            </div>
          }
        </div>
      );
    } else {
      return (
        <div className="modal">
          { this.props.isShowing &&
            <div>
              <div className="modal-backdrop" onClick={() => this.handleCloseButtonClick()}></div>
              <div className="modal-content">
                <i className="fas fa-times fa-2x close-button" onClick={() => this.handleCloseButtonClick()}></i>
                <h3>Appointment Details:</h3>
                <h3>{timeslot.firstName} {timeslot.lastName}</h3>
                <p>{timeslot.startTime} - {timeslot.endTime}</p>
                <p>{timeslot.phoneNumber}</p>
                <button className="edit-appointment" onClick={() => this.handleEditClick()}>Edit Appointment</button>
                <button className="cancel-appointment" onClick={() => this.handleCancelClick()}>Cancel Appointment</button>
              </div>
            </div>
          }
        </div>
      );
    }    
  }
}

const mapStateToProps = state => ({
  isShowing: state.modal.isShowing,
  selected: state.schedule.selected,
  timeslots: state.schedule.timeslots
});

export default connect(mapStateToProps)(Modal);