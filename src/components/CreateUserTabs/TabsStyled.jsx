import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const TabWrapper = styled(Tabs)`
  font-family: BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  width: 50%;
`;

export const TabsList = styled(TabList)`
  width: 970px;
  list-style-type: none;
  padding: 0px;
  display: flex;
  margin: 0;
`;
TabsList.tabsRole = 'TabList';

export const TabsItem = styled(Tab)`
  width: 245px;
  height: 65px;
  user-select: none;

  &.is-selected {
    color: ${'#FFFFFF'};
    background: ${'#4E86E4'};
    border-bottom: 1px solid transparent;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
`;
TabsItem.tabsRole = 'Tab';

export const TabsPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  width: 970px;
  background: ${'#E7F0FF'};
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
TabsPanel.tabsRole = 'TabPanel';
