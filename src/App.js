import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// components
import User from './components/User';
import { NavBar } from './components/NavBar';
// styled
import './App.css';

const App = () => (
  <BrowserRouter basename="/">
    <NavBar />
    <Switch>
      <Route path="/create-user" component={User} />
      <Redirect from="/" to="/create-user/account" />
    </Switch>
  </BrowserRouter>
);

export default App;
