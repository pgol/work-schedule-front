import React from 'react';
import {Field, reduxForm} from 'redux-form';

let UsersForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

UsersForm = reduxForm({
  form: 'contact'
})(UsersForm);

export default UsersForm;