import React from 'react';
import PropTypes from 'prop-types';

function getUsers(users) {
  if (users.length) {
    return (
      <ul>
        {users.map(item => (
          <li key={item.id}>
            {item.username} @ {item.email}
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>No users loaded</div>;
  }
}

function usersList({ users }) {
  return (
    <div>
      <ul>{getUsers(users)}</ul>
    </div>
  );
}

usersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      email: PropTypes.string
    })
  )
};

export default usersList;
