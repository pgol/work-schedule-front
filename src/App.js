import React, { Component } from 'react'
import './App.css'
import UsersView from './components/users/users-view'
import Day from './components/day/day-view'
import { Provider } from 'react-redux';
import store from './redux/store';

//global css imports
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'antd/dist/antd.css'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Day />
          <UsersView />
        </div>
      </Provider>
    )
  }
}

export default App
