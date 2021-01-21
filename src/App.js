import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

const App = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" render={() => <div>First App</div>} />
    </Switch>
  </BrowserRouter>
);
export default App;
