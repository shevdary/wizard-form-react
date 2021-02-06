import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
// components
import AccountForm from 'components/Forms/Account';
import ProfileForm from 'components/Forms/Profile';
import CapabilitiesForm from 'components/Forms/Capabilities';
import ContactForm from 'components/Forms/Contact';

const RouteTab = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}/account`} component={AccountForm} />
      <Route path={`${match.path}/profile`} component={ProfileForm} />
      <Route path={`${match.path}/contact`} component={ContactForm} />
      <Route path={`${match.path}/capabilities`} component={CapabilitiesForm} />
      <Redirect from="/" to={`${match.path}/account`} />
    </Switch>
  );
};
export default RouteTab;
