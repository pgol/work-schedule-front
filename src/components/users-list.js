import React from 'react';
import PropTypes from 'prop-types';

function usersList({users}) {
  function getUsers(users) {
    if (users.length > 0) {
      return (
        <ul>
          {users.map(item => (
            <li key={item.id}>{item.username} @{item.email}</li>
          ))}
        </ul>
      );
    } else {
      return (
        <div>No users loaded</div>
      )
    }
  }

  return (
    <div>
      <ul>
        {getUsers(users)}
      </ul>
    </div>
  )
}

usersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string
  }))
};

export default usersList;
