import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
// component
import { RouteTab } from '../../pages/FormRoute';
// styled
import { TabsItem, TabsList, TabSwitch, TabWrapper } from './styled';

export const Index = () => {
  const match = useRouteMatch();
  const { previousStep } = useSelector((state) => state.user);

  const isTypeTab = (type) =>
    previousStep[0] && previousStep.includes(type) ? 'before' : 'disable';

  return (
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <TabsList>
        <TabsItem to={`${match.path}/account`} className={isTypeTab('account')}>
          1. Account
        </TabsItem>
        <TabsItem to={`${match.path}/profile`} className={isTypeTab('profile')}>
          2. Profile
        </TabsItem>
        <TabsItem to={`${match.path}/contact`} className={isTypeTab('contact')}>
          3. Contact
        </TabsItem>
        <TabsItem
          to={`${match.path}/capabilities`}
          className={isTypeTab('capabilities')}
        >
          4. Capabilities
        </TabsItem>
      </TabsList>
      <TabSwitch>
        <RouteTab />
      </TabSwitch>
    </TabWrapper>
  );
};

export default Index;
