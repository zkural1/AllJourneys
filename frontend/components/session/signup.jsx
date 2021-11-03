import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createNewUser(this.state)
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div id="session-form-container">
      <div className="session-form">
        <h2>Create your free account</h2>
        {this.renderErrors()}
        <form>

            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleInput("firstname")}
              placeholder="First Name"
            />

            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleInput("lastname")}
              placeholder="Last Name"
            />

            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
              placeholder="Email"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
              placeholder="Password"
            />
            <button onClick={this.handleSubmit}>Sign Up!</button>
        </form>
        <p>Already have an account?<Link to="/login">Log in</Link></p>
      </div>
      </div>
    );
  }
}

export default Signup;
