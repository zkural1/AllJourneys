import React from "react";

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
    debugger;
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        {this.renderErrors()}
        <form>
          <label>
            First Name:
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleInput("firstname")}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleInput("lastname")}
            />
          </label>
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
            <button onClick={this.handleSubmit}>Sign Up!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Signup;
