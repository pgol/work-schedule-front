import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loadUsers} from '../ducks/user.duck';
import {getUsers as getUsersSelector} from '../selectors/user.selectors';
import UsersList from './users-list';
import UsersForm from './users-form';

class UsersView extends Component {
  componentDidMount() {
    this.props.onLoadUsers();
  }

  render() {
    return (
      <div>
        <UsersForm onSubmit={this.props.onSubmitForm}/>
        <UsersList users={this.props.users.toJS()}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: getUsersSelector(state)
});

const mapDispatchToProps = dispatch => ({
  onLoadUsers: () => dispatch(loadUsers()),
  onSubmitForm: values => {
    console.log(values);
    console.log('Sumbit Form');
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersView);
