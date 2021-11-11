import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div id="logged-in-right-container">
      <div id="profile-picture" style={{ backgroundImage: `url(${currentUser.photoUrl})` }}/>
      <div id="user-options-container">
      <div onClick={logout}>Logout</div>
      </div>
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
