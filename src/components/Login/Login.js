import React, { Component } from 'react';

import classes from './Login.css';
import Aux from '../../hoc/Aux/Aux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert('Email and password was submitted: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <Aux className={classes.Login}>
        <form className={classes.LoginForm} onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter password"            
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </Aux>
    )
  }
}

export default Login;
