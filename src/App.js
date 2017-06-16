import React, { Component } from 'react'
import './App.css'
import UsersView from  './components/users-view'
import Day from './components/Day/Day'

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
