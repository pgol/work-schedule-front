import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';


const getUsers = (users, username) => (
  <ul>
    {users.map(item => (
      <li key={item.id}>{item.username}</li>
    ))}
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{username[0]}</Avatar>
  </ul>
)

const UsersList = ({users = [], profile = {}}) => {
  if (users.length) {
    return getUsers(users, profile.username) 
  }
  return (<div>No users loaded </div>)
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string
  }))
};

export default UsersList;
