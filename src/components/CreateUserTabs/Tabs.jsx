/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
// component
import AccountForm from '../AccountForm/AccountForm';
import ProfileForm from '../ProfileForm/ProfileForm';
import ContactForm from '../ContuctForm/ContuctForm';
// styled
import { TabsItem, TabsList, TabSwitch, TabWrapper } from './TabsStyled';
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';

export const Tabs = () => {
  const match = useRouteMatch();
  const { user, previousStep } = useSelector((state) => state.user);
  const isNextStep = Object.keys(user).length === 0 ? 'disable' : 'before';
  const [isActiveTab, setIsActiveTab] = useState(false);

  const isTypeTab = (type) =>
    previousStep[0] && previousStep.includes(type) ? 'before' : 'disable';

  return (
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <TabsList>
        <TabsItem
          to={`${match.path}/account`}
          className={`${isTypeTab('account')} ${isActiveTab}`}
        >
          1. Account
        </TabsItem>
        <TabsItem
          to={`${match.path}/profile`}
          className={`${isTypeTab('profile')} `}
        >
          2. Profile
        </TabsItem>
        <TabsItem
          to={`${match.path}/contact`}
          className={`${isTypeTab('contact')} `}
        >
          3. Contact
        </TabsItem>
        <TabsItem
          to={`${match.path}/capabilities`}
          className={`${isTypeTab('capabilities')} `}
        >
          4. Capabilities
        </TabsItem>
      </TabsList>
      <TabSwitch>
        <Switch>
          <Route exact path={`${match.path}/account`} component={AccountForm} />
          <Route exact path={`${match.path}/profile`} component={ProfileForm} />
          <Route exact path={`${match.path}/contact`} component={ContactForm} />
          <Route
            exact
            path={`${match.path}/capabilities`}
            component={() => <div>Capabilitiees</div>}
          />
        </Switch>
      </TabSwitch>
    </TabWrapper>
  );
};

export default Tabs;
