import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form/immutable';

let UsersForm = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
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
);

UsersForm.propTypes = {
  handleSubmit: PropTypes.func
};

UsersForm = reduxForm({
  form: 'contact'
})(UsersForm);

export default UsersForm;
