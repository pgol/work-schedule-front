import React, {Component} from 'react';
import './App.css';
import UsersView from  './components/users-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersView />
      </div>
    );
  }
}

export default App;
