import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  demoUser(e) {
    e.preventDefault();
    this.setState(
      {
        email: "demo@alljourneys.com",
        password: "demouser123",
      },
      () => this.handleSubmit(e)
    );
  }
  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
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
    this.props.login(this.state);
  }

  render() {
    return (
      <div id="session-form-container">
      <div className="session-form">
        <h2>Log in and let's get going</h2>
        {this.renderErrors()}
        <form>
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
            <button onClick={this.handleSubmit}>Log In</button>
        </form>
        <p>Already have an account?<Link to="/login">Log in</Link></p>
        <p id="demo-user">Just exploring? Hit the trail as a<a onClick={this.demoUser}>demo user</a></p>
      </div>
      </div>
    );
  }
}

export default Login;
