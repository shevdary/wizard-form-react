import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import CreateUser from './components/СreareUser/CreateUser';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" component={CreateUser} />
    </Switch>
  </BrowserRouter>
);

export default App;
