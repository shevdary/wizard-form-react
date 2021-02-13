import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
// components
import AccountForm from 'components/Forms/Account';
import ProfileForm from 'components/Forms/Profile';
import CapabilitiesForm from 'components/Forms/Capabilities';
import ContactForm from 'components/Forms/Contact';
import { TabSwitch } from 'components/Tabs/styled';

const RouteTab = ({ onSubmit, goBack, addValuesToDB }) => {
  const { url } = useRouteMatch();

  return (
    <TabSwitch className="tab-switch">
      <Switch>
        <Route
          exact
          path={`${url}/account`}
          render={() => <AccountForm onSubmit={onSubmit} />}
        />
        <Route
          exact
          path={`${url}/profile`}
          render={() => <ProfileForm onSubmit={onSubmit} goBack={goBack} />}
        />
        <Route
          exact
          path={`${url}/contact`}
          render={() => <ContactForm onSubmit={onSubmit} goBack={goBack} />}
        />
        <Route
          exact
          path={`${url}/capabilities`}
          render={() => (
            <CapabilitiesForm onSubmit={addValuesToDB} goBack={goBack} />
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </TabSwitch>
  );
};
export default RouteTab;
