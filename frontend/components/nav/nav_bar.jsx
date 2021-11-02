import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.email}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="login_sign">
    <div className="signup_btn">
      <Link className="signup_btn_txt" to="/signup">Sign Up</Link>
      </div>
      <div className="login_btn">
      <Link className="login_btn_txt" to="/login">Log In</Link>
    </div>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link className="logo" to="/"><h1>AllJourneys</h1></Link>
      <div className="nav_right_container">
        {display}
      </div>
    </header>
  )
}
