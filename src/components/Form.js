import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { updateSchedule } from '../actions/Schedule';
import { hideModal } from '../actions/Modal';

import '../styles/Form.css';

class ScheduleForm extends Component {

  onSubmit = ({ firstName = '', lastName = '', phoneNumber = '' }) => {

    let error = {};
    let isError = false;
  
    // BEGIN VALIDATORS //
    if (firstName.trim() === '') {
      error.firstName = 'First name is required';
      isError = true;
    }
  
    if (lastName.trim() === '') {
      error.lastName = 'Last name is required';
      isError = true;
    }
  
    let phoneNumberFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (phoneNumber.trim() === '') {
      error.phoneNumber = 'Phone number is required';
      isError = true;
    } else if (phoneNumberFormat.test(phoneNumber) === false) {
      error.phoneNumber = 'Not a valid phone number';
      isError = true;
    }
    // END VALIDATORS //
  
    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.props.dispatch(updateSchedule({
        firstName,
        lastName,
        phoneNumber
      }))
      this.props.dispatch(hideModal())
    }
    
  }
  
  renderField = ({ type, label, input, meta: { touched, error } }) => (
    <div className="input-field">
      <label className="form-label">{label}</label>
      <input {...input} type={type} />
      {touched && error && <span className="error">{error}</span>}
    </div>
  );

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
    
        <Field label="First Name" name="firstName" component={this.renderField} type="text" />   
        
        <Field label="Last Name" name="lastName" component={this.renderField} type="text" />
      
        <Field label="Phone Number" name="phoneNumber" component={this.renderField} type="text" />
        
        <button type="submit">Submit</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'registration'
})(ScheduleForm);