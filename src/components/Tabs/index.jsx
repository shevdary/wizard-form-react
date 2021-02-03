import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
import { tabsSelector } from 'redux/tabs/selector';
// component
import { RouteTab } from 'pages/RouteTab';
// utils
import { TABS_NAME } from 'utils/optionsValue';
// styled
import { TabsItem, TabsList, TabSwitch, TabWrapper } from './styled';

export const Tabs = () => {
  const match = useRouteMatch();
  const { tabs } = useSelector(tabsSelector);

  const isTypeTab = (type) =>
    tabs[0] && tabs.includes(type) ? 'before' : 'disable';

  return (
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      className="tab-wrapper"
    >
      <TabsList className="tab-list">
        <TabsItem
          to={`${match.path}/${TABS_NAME[0]}`}
          className={isTypeTab('account')}
        >
          1. Account
        </TabsItem>
        <TabsItem
          to={`${match.path}/${TABS_NAME[1]}`}
          className={isTypeTab('profile')}
        >
          2. Profile
        </TabsItem>
        <TabsItem
          to={`${match.path}/${TABS_NAME[2]}`}
          className={isTypeTab('contact')}
        >
          3. Contact
        </TabsItem>
        <TabsItem
          to={`${match.path}/${TABS_NAME[3]}`}
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
