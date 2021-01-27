/*eslint-disable*/
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
// component
import { RouteTab } from '../../pages/FormRoute';
// styled
import { TabsItem, TabsList, TabSwitch, TabWrapper } from './styled';
import { Header } from '../Header';
// utils
import { saveInfo, savePage } from '../../utils/localStorage';

export const Tabs = () => {
  const match = useRouteMatch();
  const { previousStep } = useSelector((state) => state.user);
  const path = useHistory();
  const store = useSelector((state) => state.user.user);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      savePage(path.location.pathname);
      saveInfo(store);
    });
  }, [store]);

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
      {localStorage.getItem('filledFields') && <Header />}
      <TabSwitch className="tab-switch">
        <RouteTab />
      </TabSwitch>
    </TabWrapper>
  );
};

export default Tabs;
