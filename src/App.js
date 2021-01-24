import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import CreateUser from './components/СreareUser/CreateUser';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/create-user" component={CreateUser} />
      <Redirect from="/" to="/create-user/account" />
    </Switch>
  </BrowserRouter>
);

export default App;
