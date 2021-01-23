/* eslint-disable */
import React from 'react';
import AccountForm from '../AccountForm/AccountForm';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  TabLink,
  TabsItem,
  TabsList,
  TabsPanel,
  TabWrapper,
} from './TabsStyled';

export const Tabs = () => {
  return (
    <BrowserRouter>
      <TabWrapper
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <TabsList>
          <TabsItem>
            <TabLink to={`/create-user/account`}>1. Account</TabLink>
          </TabsItem>
          <TabsItem>
            <TabLink to={`/create-user/profile`}>2. Profile</TabLink>
          </TabsItem>
          <TabsItem>
            <TabLink to={`/create-user/contact`}>3. Contact</TabLink>
          </TabsItem>
          <TabsItem>
            <TabLink to={`/create-user/capabilities`}>4. Capabilities</TabLink>
          </TabsItem>
        </TabsList>

        <TabsPanel>
          <Route exact path={`/create-user/account`} component={AccountForm} />
        </TabsPanel>
        <TabsPanel>
          <Route
            exact
            path={`/create-user/profile`}
            render={() => <div>Content Profile</div>}
          />
        </TabsPanel>
        <TabsPanel>
          <Route
            exact
            path={`/create-user/contact`}
            render={() => <div>Content Contact</div>}
          />
        </TabsPanel>
        <TabsPanel>
          <Route
            exact
            path={`/create-user/capabilities`}
            render={() => <div>Content Capabilities</div>}
          />
        </TabsPanel>
      </TabWrapper>
    </BrowserRouter>
  );
};

export default Tabs;
