import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPageContainer from './landing_page/landing_page_container';
import ProfileContainer from '../components/profile/profile_container';

const App = () => (
  <div>
    <Route path="/" component={LandingPageContainer} />
    <ProtectedRoute path="/users/:id" component={ProfileContainer}/>
  </div>
);

export default App;