import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

// components
import AccountForm from 'components/Forms/Account';
import ProfileForm from 'components/Forms/Profile';
import CapabilitiesForm from 'components/Forms/Capabilities';
import ContactForm from 'components/Forms/Contact';

const RouteTab = ({ onSubmit, goBack, addValuesToDB }) => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={`${match.path}/account`}
        render={() => <AccountForm onSubmit={onSubmit} />}
      />
      <Route
        path={`${match.path}/profile`}
        render={() => <ProfileForm onSubmit={onSubmit} goBack={goBack} />}
      />
      <Route
        path={`${match.path}/contact`}
        render={() => <ContactForm onSubmit={onSubmit} goBack={goBack} />}
      />
      <Route
        path={`${match.path}/capabilities`}
        render={() => (
          <CapabilitiesForm onSubmit={addValuesToDB} goBack={goBack} />
        )}
      />
      <Redirect from="/" to={`${match.path}/account`} />
    </Switch>
  );
};
export default RouteTab;
