import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// store
import { useDispatch } from 'react-redux';
import { removeOldVersion } from 'store/db';
// components
import { NavBar } from 'components/NavBar';
import ListOfUser from 'pages/ListOfUser';
import EditUser from 'pages/EditUser';
import UserView from 'pages/ViewUser';
import NotFound from 'pages/NotFoundPage';
import TabNavigationWrapper from 'navigation/TabNavigationWrapper';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeOldVersion());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Switch>
        <Redirect exact from="/" to="/create-user/account" />
        <Route path="/create-user" component={TabNavigationWrapper} />
        <Route exact path="/user-list" component={ListOfUser} />
        <Route exact path="/user/:id" component={UserView} />
        <Route path="/edit-user/:id" component={EditUser} />
        <Route exact path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
