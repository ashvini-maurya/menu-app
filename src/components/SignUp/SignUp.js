import React, { Component } from 'react';

import classes from './SignUp.css';
import Modal from '../UI/Modal/Modal';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
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
      <Modal show={this.props.show} clicked={this.props.modalClosed}>
        <div className={classes.SignUpHeader}>
          <h4>SignUp</h4>
          <h4 onClick={this.props.modalClosed}>X</h4>
        </div>
        <form className={classes.SignUpForm} onSubmit={this.handleSubmit}>
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
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            onChange={this.handleChange}
          />
          <input type="submit" value="Sign up" />
        </form>
      </Modal>
    )
  }
}

export default SignUp;
