import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// component
import AccountForm from '../AccountForm/AccountForm';
import ProfileForm from '../ProfileForm/ProfileForm';
import ContactForm from '../ContuctForm/ContuctForm';
// styled
import {
  TabLink,
  TabsItem,
  TabsList,
  TabsPanel,
  TabWrapper,
} from './TabsStyled';

export const Tabs = () => (
  <BrowserRouter>
    <TabWrapper
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <TabsList>
        <TabsItem>
          <TabLink to="/create-user/account">1. Account</TabLink>
        </TabsItem>
        <TabsItem>
          <TabLink to="/create-user/profile">2. Profile</TabLink>
        </TabsItem>
        <TabsItem>
          <TabLink to="/create-user/contact">3. Contact</TabLink>
        </TabsItem>
        <TabsItem>
          <TabLink to="/create-user/capabilities">4. Capabilities</TabLink>
        </TabsItem>
      </TabsList>

      <TabsPanel>
        <Route exact path="/create-user/account" component={AccountForm} />
      </TabsPanel>
      <TabsPanel>
        <Route exact path="/create-user/profile" component={ProfileForm} />
      </TabsPanel>
      <TabsPanel>
        <Route exact path="/create-user/contact" component={ContactForm} />
      </TabsPanel>
      <TabsPanel>
        <Route
          exact
          path="/create-user/capabilities"
          render={() => <div>Content Capabilities</div>}
        />
      </TabsPanel>
    </TabWrapper>
  </BrowserRouter>
);

export default Tabs;
