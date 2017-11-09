import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Layout } from 'antd';

import Calendar from './components/calendar/calendar-view';
import Profile from './components/profile/profile-view';
import UsersView from './components/users/users-view';
import EventAddForm from './components/event/event-add-form';

//global css imports
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    const { Header, Sider } = Layout;

    return (
      <Provider store={store}>
        <Layout>
          <Header>
            <Profile />
          </Header>
          <Layout>
            <Sider>
              <UsersView />
              <EventAddForm />
            </Sider>
            <Calendar />
          </Layout>
        </Layout>
      </Provider>
    );
  }
}

export default App;
