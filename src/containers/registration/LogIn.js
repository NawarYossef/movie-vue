import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/users";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./registration.css";

class LogIn extends Component {
	constructor(props) {
		super();
		this.state = {
			userName: '',
      password: '',
      token: ''
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
			const userData = this.state;
			this.props.dispatch(userLogin(userData));
	}

	render() {
		return (
			<section className={"registration-form-wrapper"}>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group">
						<label htmlFor="username">User Name</label>
						<input type="text" className={"form-control"} placeholder="First name"
							onChange={(e) => this.setState({ userName: e.target.value })}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="user-password" placeholder="Password"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</div>
					<button type="submit" className="btn btn-primary left">Log In</button>
				</form>
			</section>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	userLogin: userData => dispatch(userLogin(userData))
});

export default connect(null, mapDispatchToProps)(LogIn);