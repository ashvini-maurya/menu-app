import React, { Component } from 'react';

import classes from './Login.css';

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
      <div className={classes.Login}>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Please enter email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Please enter password"            
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Login;
