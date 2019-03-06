import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import '../styles/Form.css';

const submit = ({ firstName = '', lastName = '', phoneNumber = '' }) => {

  let error = {};
  let isError = false;

  // BEGIN VALIDATORS
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

  // END VALIDATORS

  console.log({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber
  });

  if (isError) {
    throw new SubmissionError(error);
  } else {
    // dispatch action to submit form to server
  }

  
}

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div className="input-field">
    <label className="form-label">{label}</label>
    <input {...input} type={type} />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

const createForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submit)}>
  
    <Field label="First Name" name="firstName" component={renderField} type="text" />   
    
    <Field label="Last Name" name="lastName" component={renderField} type="text" />
  
    <Field label="Phone Number" name="phoneNumber" component={renderField} type="text" />
    
    <button type="submit">Submit</button>

  </form>
);

const Form = reduxForm({
  form: 'contact'
})(createForm);

export default Form;