import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
// store
import { useSelector } from 'react-redux';
import { tabsSelector } from 'store/tabs/selector';
// component

// styled
import { TabsItem, TabsList, TabWrapper } from './styled';

export const Tabs = () => {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const { passedTabs } = useSelector(tabsSelector);

  const isTypeTab = (type) =>
    passedTabs[0] && passedTabs.includes(type) ? 'before' : 'disable';

  const isActiveTab = (tabName) => pathname.includes(tabName) && 'active';

  const isDisableTab = (tabName) =>
    isTypeTab(tabName) === 'before' ? `${url}/${tabName}` : '#';

  return (
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      className="tab-wrapper"
    >
      <TabsList className="tab-list">
        <TabsItem
          to={() => isDisableTab('account')}
          className={`${isActiveTab('account')}  ${isTypeTab('account')}`}
        >
          1. Account
        </TabsItem>
        <TabsItem
          to={() => isDisableTab('profile')}
          className={`${isActiveTab('profile')}  ${isTypeTab('profile')}`}
        >
          2. Profile
        </TabsItem>
        <TabsItem
          to={() => isDisableTab('contact')}
          className={`${isActiveTab('contact')}  ${isTypeTab('contact')}`}
        >
          3. Contact
        </TabsItem>
        <TabsItem
          to={() => isDisableTab('capabilities')}
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
