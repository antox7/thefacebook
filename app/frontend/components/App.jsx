// import GreetingContainer from "./greeting/greeting_container";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import React from 'react';
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";

const App = () => (
  <div>
    <header>
      <h1>thefacebook</h1>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

// list of containers

export default App;