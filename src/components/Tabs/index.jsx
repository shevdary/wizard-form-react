/*eslint-disable*/
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
// component
import { RouteTab } from '../../pages/FormRoute';
// styled
import { TabsItem, TabsList, TabSwitch, TabWrapper } from './styled';
import { Header } from '../Header';
// utils
import { USER_INFO_STORAGE } from '../../utils/localStorage';

export const Tabs = () => {
  const match = useRouteMatch();
  const { previousStep } = useSelector((state) => state.user);

  const isTypeTab = (type) =>
    previousStep[0] && previousStep.includes(type) ? 'before' : 'disable';

  return (
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      className="tab-wrapper"
    >
      <TabsList className="tab-list">
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
      {USER_INFO_STORAGE && <Header />}
      <TabSwitch className="tab-switch">
        <RouteTab />
      </TabSwitch>
    </TabWrapper>
  );
};

export default Tabs;
