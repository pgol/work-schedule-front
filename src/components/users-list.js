import React from 'react';

export default function usersList({ users }) {
  const usersItems = users.map(user => (
    <li>{user.username}</li>
  ));

  return (
    <div>
      <ul>
        {usersItems}
      </ul>
    </div>
  )
}