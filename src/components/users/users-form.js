import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form/immutable'
import { Input, Button } from 'antd'

class UserForm extends Component {
  onUsernameChange = (event) => {
    console.log(event.target.value)
  }

  onPasswordChange = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className="user-log-form">
        <Input 
          placeholder="Login"
          onChange={this.onUsernameChange}
        />
        <Input 
          placeholder="Password"
          type="password"
          onChange={this.onPasswordChange}
        />
        <Button>Submit</Button>
      </div>
    )
  }
  
};

export default UserForm;
