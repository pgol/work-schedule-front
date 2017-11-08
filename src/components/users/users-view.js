import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {connect} from 'react-redux'
import { toJS } from 'immutable'

import {loadUsers, submitUser, loginUser} from '../../ducks/user.duck'
import {getUsers as getUsersSelector} from '../../selectors/user.selectors'
import UsersForm from './users-form'
import UsersList from './users-list'

class UsersView extends Component {
  componentDidMount() {
    this.props.onLoadUsers()
  }

  render() {
    return (
      <div>
        <UsersList users={this.props.users} />
        <UsersForm onSubmit={this.props.onLoginForm}/>
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
  users: getUsersSelector(state).toJS()
})
const mapDispatchToProps = dispatch => ({
  onLoadUsers: () => dispatch(loadUsers()),
  onSubmitForm: data => dispatch(submitUser(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersView)
