import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/Modal';

import '../styles/Modal.css';

class Modal extends Component {

  handleCloseButtonClick() {
    this.props.dispatch(hideModal());
  }

  render() {
    return (
      <div className="modal">
        { this.props.isShowing &&
          <div>
            <div className="modal-backdrop" onClick={() => this.handleCloseButtonClick()}></div>
            <div className="modal-content">
              <button onClick={() => this.handleCloseButtonClick()}>Close Modal</button>
              <p>{this.props.schedule.timeslots[this.props.id].startTime}</p>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isShowing: state.modal.isShowing,
  id: state.modal.id,
  schedule: state.schedule
});

export default connect(mapStateToProps)(Modal);