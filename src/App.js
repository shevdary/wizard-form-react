import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// components
import { NavBar } from 'components/NavBar';
// styled
import './App.css';
import CreateUser from 'pages/CreateUser';
import { ListOfUser } from 'pages/ListOfUser';

const App = () => (
  <BrowserRouter basename="/">
    <NavBar />
    <Switch>
      <Redirect exact from="/" to="/create-user" />
      <Route path="/create-user" component={CreateUser} />
      <Route path="/user-list" component={ListOfUser} />
    </Switch>
  </BrowserRouter>
);

export default App;
