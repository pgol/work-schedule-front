import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loadUsers} from '../ducks/user.duck';
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
        <UsersList users={this.props.users}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.items
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