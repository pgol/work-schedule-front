import React, {Component} from 'react';
import './App.css';
import UsersView from  './components/users-view';
import Event from './components/Event/Event';
import { events } from './tools/tools';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersView />
        { events.map((event, index) => (
          <Event event={event}/>
        ))}
      </div>
    );
  }
}

export default App;
