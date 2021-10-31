import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);
// must be logged out
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
// must be logged in
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
