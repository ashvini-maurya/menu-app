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
    this.setState({ 
      [event.target.name]: event.target.value
    });
    localStorage.setItem(event.target.name, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Entered Email: ", this.state.email);
    console.log("Entered Password: ", this.state.password);
  }

  render() {
    return (
      <Aux className={classes.Login}>
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
      </Aux>
    )
  }
}

export default Login;
