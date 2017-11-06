import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Input, Button, Form, Icon, Checkbox } from 'antd'
import { connect } from 'react-redux'
import { loginUser } from '../../ducks/user.duck'
import './users.css'

const FormItem = Form.Item

class UserForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.onLoginForm(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}
//@TODO: connect not neccessary? check ant.d docs of Form component
const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  onLoginForm: data => dispatch(loginUser(data))
})

const connectedForm = connect(mapStateToProps, mapDispatchToProps)(UserForm)
const WrappedUserForm = Form.create()(connectedForm)

export default WrappedUserForm
