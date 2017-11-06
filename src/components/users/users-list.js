import React from 'react';
import PropTypes from 'prop-types';

const getUsers = (users) => (
  <ul>
    {users.map(item => (
      <li key={item.id}>{item.username}</li>
    ))}
  </ul>
)

const UsersList = ({users = []}) => {
  if (users.length) {
    return getUsers(users) 
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
