import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.email}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="login-sign">
    <div className="signup-btn">
      <Link className="signup-btn-txt" to="/signup">Sign Up</Link>
      </div>
      <div className="login-btn">
      <Link className="login-btn-txt" to="/login">Log In</Link>
    </div>
    </div>
  );
  return (
    <header className="nav-bar">
      <div className="explore"></div>
      <Link className="logo" to="/"><FontAwesomeIcon icon="mountain" /><h1>AllJourneys</h1></Link>
      <div className="nav-right-container">
        {display}
      </div>
    </header>
  )
}
