import React, { Component } from 'react';

import classes from './Login.css';
import Modal from '../UI/Modal/Modal';

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
      <Modal show={this.props.show} clicked={this.props.modalClosed}>
        <div className={classes.LoginHeader}>
          <h4>Login</h4>
          <h4 onClick={this.props.modalClosed}>X</h4>
        </div>
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
          <input type="submit" value="Login" />
        </form>
      </Modal>
    )
  }
}

export default Login;
