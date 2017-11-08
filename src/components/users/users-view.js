import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {connect} from 'react-redux'
import { toJS } from 'immutable'

import {loadUsers, submitUser, loginUser} from '../../ducks/user.duck'
import {
  getUsers as getUsersSelector, 
  getProfile as getProfileSelector} from '../../selectors/user.selectors'
import UsersForm from './users-form'
import UserProfile from './users-profile'

class UsersView extends Component {
  componentDidMount() {
    this.props.onLoadUsers()
  }

  render() {
    return (
      <div>
        {this.props.profile.username && <UserProfile profile={this.props.profile} users={this.props.users} />}
        {!this.props.profile.username && <UsersForm onSubmit={this.props.onLoginForm}/>}
      </div>
    )
  }
}

UsersView.propTypes = {
  onLoadUsers: PropTypes.func,
  onSubmitForm: PropTypes.func,
  users: PropTypes.array
}

const mapStateToProps = state => ({
  users: getUsersSelector(state).toJS(),
  profile: getProfileSelector(state).toJS()
})
const mapDispatchToProps = dispatch => ({
  onLoadUsers: () => dispatch(loadUsers()),
  onSubmitForm: data => dispatch(submitUser(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersView)
