import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
import { tabsSelector } from 'redux/tabs/selector';
// component

// styled
import { TabsItem, TabsList, TabWrapper } from './styled';

export const Tabs = () => {
  const match = useRouteMatch();
  const activeTab = useLocation().pathname;
  const { passedTabs } = useSelector(tabsSelector);

  const isTypeTab = (type) =>
    passedTabs[0] && passedTabs.includes(type) ? 'before' : 'disable';

  const isActiveTab = (tab) => activeTab.includes(tab) && 'active';

  return (
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      className="tab-wrapper"
    >
      <TabsList className="tab-list">
        <TabsItem
          to={`${match.path}/account`}
          className={`${isActiveTab('account')}  ${isTypeTab('account')}`}
          disable
        >
          1. Account
        </TabsItem>
        <TabsItem
          to={`${match.path}/profile`}
          className={`${isActiveTab('profile')}  ${isTypeTab('profile')}`}
        >
          2. Profile
        </TabsItem>
        <TabsItem
          to={`${match.path}/contact`}
          className={`${isActiveTab('contact')}  ${isTypeTab('contact')}`}
        >
          3. Contact
        </TabsItem>
        <TabsItem
          to={`${match.path}/capabilities`}
          className={`${isActiveTab('capabilities')}  ${isTypeTab(
            'capabilities'
          )}`}
        >
          4. Capabilities
        </TabsItem>
      </TabsList>
    </TabWrapper>
  );
};

export default Tabs;
