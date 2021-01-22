import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const TabWrapper = styled(Tabs)`
  font-family: BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  width: 50%;
`;

export const TabsList = styled(TabList)`
  display: flex;
  width: 970px;
  margin: 0;
  padding: 0px;
  list-style-type: none;
`;
TabsList.tabsRole = 'TabList';

export const TabsItem = styled(Tab)`
  width: 245px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(151, 186, 244, 0.3);
  color: #9bb0cb;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  user-select: none;

  &.is-selected {
    color: #ffffff;
    background: #4e86e4;
    border-bottom: 1px solid transparent;
    opacity: 100%;
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
  height: 340px;
  background: rgba(231, 240, 255, 0.2);
  padding: 4px;
  margin-top: -1px;

  &.is-selected {
    display: block;
  }
`;
TabsPanel.tabsRole = 'TabPanel';
