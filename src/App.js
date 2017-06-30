import React, { Component } from 'react'
import './App.css'
import UsersView from  './components/users/users-view'
import Day from './components/day/day-view'

class App extends Component {
  render () {
    return (
      <div className="App">
        <UsersView />
        <Day />
      </div>
    )
  }
}

export default App
