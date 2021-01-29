/*eslint-disable*/
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
// redux
import { getTab } from 'redux/tab/selector';
// component
import { RouteTab } from '../../pages/FormRoute';
// styled
import { TabsItem, TabsList, TabSwitch, TabWrapper } from './styled';

export const Tabs = () => {
  const match = useRouteMatch();
  const { tabs } = useSelector(getTab);

  const isTypeTab = (type) =>
    tabs[0] && tabs.includes(type) ? 'before' : 'disable';

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
      <TabSwitch className="tab-switch">
        <RouteTab />
      </TabSwitch>
    </TabWrapper>
  );
};

export default Tabs;
