import React, { Component } from 'react'
import './App.css'
import Calendar from './components/calendar/calendar-view'
import { Provider } from 'react-redux';
import store from './redux/store';
import { Layout } from 'antd'

//global css imports
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'antd/dist/antd.css'


class App extends Component {
  
  render() {
    const { Header, Footer } = Layout
 
    return (
      <Provider store={store}>
        <Layout>
          <Header>
            <h1>Golendar</h1>
          </Header>
            <Calendar /> 
          <Footer>Footer</Footer>
        </Layout>
      </Provider>
    )
  }
}

export default App
