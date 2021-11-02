import React from "react";

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
      <div className="session-form">
        <h2>Log In!</h2>
        {this.renderErrors()}
        <form>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <button onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
        <button onClick={this.demoUser}>Demo User</button>
      </div>
    );
  }
}

export default Login;
