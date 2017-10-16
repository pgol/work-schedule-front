import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';

import {loadUsers, submitUser} from '../ducks/user.duck';
import {getUsers as getUsersSelector} from '../selectors/user.selectors';
import UsersForm from './users-form';

class UsersView extends Component {
  componentDidMount() {
    this.props.onLoadUsers();
  }

  render() {
    return (
      <div style={{margin: '15px 0'}}>
        <UsersForm onSubmit={this.props.onSubmitForm}/>
      </div>
    )
  }
}

UsersView.propTypes = {
  onLoadUsers: PropTypes.func,
  onSubmitForm: PropTypes.func,
  users: ImmutablePropTypes.list
};

const mapStateToProps = state => ({
  users: getUsersSelector(state)
});
const mapDispatchToProps = dispatch => ({
  onLoadUsers: () => dispatch(loadUsers()),
  onSubmitForm: data => dispatch(submitUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersView);
