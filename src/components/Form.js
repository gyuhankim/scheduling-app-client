import React from 'react';
import { Field, reduxForm } from 'redux-form';

const submit = (values) => {
  console.log(values);
}

const createForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submit)}>

    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>

    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>

    <div>
      <label htmlFor="phoneNumber">Phone Number</label>
      <Field name="phoneNumber" component="input" type="text" />
    </div>

    <button type="submit">Submit</button>

  </form>
);

const Form = reduxForm({
  form: 'contact'
})(createForm);

export default Form;