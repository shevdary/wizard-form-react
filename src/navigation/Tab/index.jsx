import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

// components
import AccountForm from 'components/Forms/Account';
import ProfileForm from 'components/Forms/Profile';
import CapabilitiesForm from 'components/Forms/Capabilities';
import ContactForm from 'components/Forms/Contact';
import NotFound from '../../pages/NotFoundPage';

const RouteTab = ({ onSubmit, goBack, addValuesToDB }) => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
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
      <Route component={NotFound} />
    </Switch>
  );
};
export default RouteTab;
