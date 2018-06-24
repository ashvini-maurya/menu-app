import React, { Component } from 'react';

import classes from './Login.css';
import Modal from '../UI/Modal/Modal';

import SignUp from '../SignUp/SignUp';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogin: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);
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

  signUpClicked = (event) => {
    console.log("signup event", event)
    this.setState({
      isLogin: false
    })
  }

  render() {
    console.log("before render signupclicked status: ", this.state.isLogin)
    if (!this.state.isLogin) {
      return <SignUp />
    }
    else {
      return (
        <Modal show={this.props.show} clicked={this.props.modalClosed} title="Login">
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
          <h4>Not Signed-up yet? Sign-up now <button onClick={this.signUpClicked}>Sign up</button></h4>
        </Modal>
      )
    }
  }
}

export default Login;
