import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AccountForm from './components/AccountForm/AccountForm';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" component={AccountForm} />
    </Switch>
  </BrowserRouter>
);

export default App;
