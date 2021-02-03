import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
// components
import AccountForm from 'components/AccountForm';
import ProfileForm from 'components/ProfileForm';
import CapabilitiesForm from 'components/CapabilitiesForm';
import ContactForm from 'components/ContactForm';

export const RouteTab = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/account`} component={AccountForm} />
      <Route path={`${match.path}/profile`} component={ProfileForm} />
      <Route path={`${match.path}/contact`} component={ContactForm} />
      <Route path={`${match.path}/capabilities`} component={CapabilitiesForm} />
      <Redirect from="/" to={`${match.path}/account`} />
    </Switch>
  );
};
