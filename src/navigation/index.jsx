import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// components
import CreateUser from 'pages/CreateUser';
import { NavBar } from 'components/NavBar';
import ListOfUser from 'pages/ListOfUser';
import EditUser from 'pages/EditUser';
import UserView from 'pages/ViewUser';
import NotFound from 'pages/NotFoundPage';

const App = () => (
  <BrowserRouter basename="/">
    <NavBar />
    <Switch>
      <Redirect exact from="/" to="/create-user/account" />
      <Route path="/create-user" component={CreateUser} />
      <Route exact path="/user-list" component={ListOfUser} />
      <Route exact path="/user/:id" component={UserView} />
      <Route path="/edit-user/:id" component={EditUser} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
