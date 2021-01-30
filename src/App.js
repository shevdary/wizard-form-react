import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// components
import { NavBar } from './components/NavBar';
// styled
import './App.css';
import CreateUser from './pages/CreateUser';

const App = () => (
  <BrowserRouter basename="/">
    <NavBar />
    <Switch>
      <Route path="/create-user" component={CreateUser} />
      <Redirect from="/" to="/create-user/account" />
    </Switch>
  </BrowserRouter>
);

export default App;
