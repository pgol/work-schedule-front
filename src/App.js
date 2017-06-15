import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import UsersView from  './components/users-view';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <ul>
              <li>
                <Link to="/">Users</Link>
              </li>
            </ul>
            <Route path="/" component={UsersView} />
          </div>
        </Router>
    );
  }
}

export default App;
