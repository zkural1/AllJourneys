import React from 'react';
import { Route,Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavBarContainer from './nav/nav_bar_container';
import ParkShowContainer from './parks/park_show_container'
import HomeContainer from './home/home_container';
import Footer from './nav/footer';
import TrailShowContainer from './trails/trail_show_container';
import NotFound from './404/not_found.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default () => (
  <div>

    <Route path="/" component={NavBarContainer}/>
    <Switch >
    <Route exact path="/" component={HomeContainer}/>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Route path="/api/trails/:trailId" component={TrailShowContainer} />
    <Route path="/api/parks/:parkId" component = {ParkShowContainer} />
    <Route component={NotFound} />
    </Switch>
    {/* <Route path="/" component={Footer}/> */}
  </div>
);
