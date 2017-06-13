import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import UsersList from  './components/users-list';

const users = [
  {
    username: 'pgol'
  },
  {
    username: 'test'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList
          users={users}
        />
      </div>
    );
  }
}

export default App;
