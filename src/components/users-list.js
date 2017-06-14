import React from 'react';

function usersList({users}) {
  let usersItems;

  if (users.length > 0) {
    usersItems = users.map(item => (
      <li key={item.id}>{item.username}</li>
    ))
  } else {
    usersItems = [];
  }

  return (
    <div>
      <ul>
        {usersItems}
      </ul>
    </div>
  )
}

export default usersList;