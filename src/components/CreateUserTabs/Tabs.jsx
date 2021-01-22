import React from 'react';
import { TabsItem, TabsList, TabsPanel, TabWrapper } from './TabsStyled';
import AccountForm from '../AccountForm/AccountForm';

export const Tabs = () => (
  <TabWrapper
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
  >
    <TabsList>
      <TabsItem>1. Account</TabsItem>
      <TabsItem>2. Profile</TabsItem>
      <TabsItem>3. Contact</TabsItem>
      <TabsItem>4. Capabilities</TabsItem>
    </TabsList>
    <TabsPanel>
      <AccountForm />
    </TabsPanel>
    <TabsPanel>Content Profile</TabsPanel>
    <TabsPanel>Content Contact</TabsPanel>
    <TabsPanel>Content Capabilities</TabsPanel>
  </TabWrapper>
);

export default Tabs;
