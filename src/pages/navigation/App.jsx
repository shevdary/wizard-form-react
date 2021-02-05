import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// components
import CreateUser from 'pages/CreateUser';
import { NavBar } from 'components/NavBar';
import { ListOfUser } from 'pages/ListOfUser';
import ViewUserInfo from '../ViewUserInfo';
// styled
import './App.css';

const App = () => (
  <BrowserRouter basename="/">
    <NavBar />
    <Switch>
      <Redirect exact from="/" to="/create-user" />
      <Route path="/create-user" component={CreateUser} />
      <Route exact path="/user-list" component={ListOfUser} />
      <Route path="/user-list/:id" component={ViewUserInfo} />
    </Switch>
  </BrowserRouter>
);

export default App;
