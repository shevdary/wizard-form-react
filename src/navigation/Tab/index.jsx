import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// components
import AccountForm from 'components/Forms/Account';
import ProfileForm from 'components/Forms/Profile';
import CapabilitiesForm from 'components/Forms/Capabilities';
import ContactForm from 'components/Forms/Contact';
import NotFound from 'pages/NotFoundPage';
import { TabSwitch } from 'components/Tabs/styled';

const RouteTab = ({ onSubmit, goBack, addValuesToDB }) => {
  const { url } = useRouteMatch();

  return (
    <TabSwitch className="tab-switch">
      <Switch>
        <Route
          path={`${url}/account`}
          render={() => <AccountForm onSubmit={onSubmit} />}
        />
        <Route
          path={`${url}/profile`}
          render={() => <ProfileForm onSubmit={onSubmit} goBack={goBack} />}
        />
        <Route
          path={`${url}/contact`}
          render={() => <ContactForm onSubmit={onSubmit} goBack={goBack} />}
        />
        <Route
          path={`${url}/capabilities`}
          render={() => (
            <CapabilitiesForm onSubmit={addValuesToDB} goBack={goBack} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </TabSwitch>
  );
};
export default RouteTab;
