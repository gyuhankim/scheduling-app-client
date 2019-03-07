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

    if (timeslot.available || timeslot.editable) {
      return (
        <div className="modal">
          { this.props.isShowing &&
            <div>
              <div className="modal-backdrop" onClick={() => this.handleCloseButtonClick()}></div>
              <div className="modal-content">
                <i className="fas fa-times fa-2x close-button" onClick={() => this.handleCloseButtonClick()}></i>
                <h3 className="modal-title">Create An Appointment</h3>
                <h4 className="modal-info-label">Time:</h4>
                <h4 className="modal-info-copy">{timeslot.startTime} - {timeslot.endTime}</h4>

                <div className="form-container">
                  <Form firstName={timeslot.firstName} lastName={timeslot.lastName} phoneNumber={timeslot.phoneNumber} />
                </div>
                
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

                <h3 className="modal-title">Appointment Details</h3>

                <div className="modal-info-section">
                  <h4 className="modal-info-label">Name: </h4>
                  <p className="modal-info-copy">{timeslot.firstName} {timeslot.lastName}</p>
                </div>
                
                <div className="modal-info-section">
                  <h4 className="modal-info-label">Phone Number: </h4>
                  <p className="modal-info-copy">{timeslot.phoneNumber}</p>
                </div>
                
                <div className="modal-info-section">
                  <h4 className="modal-info-label">Time: </h4>
                  <p className="modal-info-copy">{timeslot.startTime} - {timeslot.endTime}</p>
                </div>

                <button className="edit-appointment" onClick={() => this.handleEditClick()}>Edit Appointment</button>
                <button className="cancel-appointment cancel-button" onClick={() => this.handleCancelClick()}>Cancel Appointment</button>
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