import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// components
import AccountForm from 'components/AccountForm';
import ProfileForm from 'components/ProfileForm';
import CapabilitiesForm from 'components/CapabilitiesForm';
import ContactForm from 'components/ContactForm';

export const RouteTab = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}/account`} component={AccountForm} />
      <Route exact path={`${match.path}/profile`} component={ProfileForm} />
      <Route exact path={`${match.path}/contact`} component={ContactForm} />
      <Route
        exact
        path={`${match.path}/capabilities`}
        component={CapabilitiesForm}
      />
    </Switch>
  );
};
