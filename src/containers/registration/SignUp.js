import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from "../../actions/users";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./registration.css";

export class SignUp extends Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount = () => {
    this.changeFooterPosition();
  }

  changeFooterPosition = () => {
    document.querySelector("footer").setAttribute("style", "position:absolute; bottom:0;");
		document.getElementById("root").style.height = "100vh";
		document.getElementById("root").style.backgroundColor = "#081C24";
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.password) {
      window.alert('Passwords do not match');
      return;
    } else {
      const newUser = this.state;
      this.props.createNewUser(newUser);
    }
  }

  render() {
    return (
      <section className={"registration-form-wrapper"}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input type="text" className={"form-control"} placeholder="First name"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="user-password" placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNewUser: userInfo => dispatch(createNewUser(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);