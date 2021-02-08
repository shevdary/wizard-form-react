import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
import { tabsSelector } from 'redux/tabs/selector';
// component

// styled
import { TabsItem, TabsList, TabWrapper } from './styled';

export const Tabs = () => {
  const match = useRouteMatch();
  const { passedTabs } = useSelector(tabsSelector);

  const isTypeTab = (type) =>
    passedTabs[0] && passedTabs.includes(type) ? 'before' : 'disable';

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
    </TabWrapper>
  );
};

export default Tabs;
