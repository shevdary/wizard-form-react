import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const TabWrapper = styled.div`
  position: relative;
  font-family: BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
`;

export const TabsList = styled.div`
  display: flex;
  width: 970px;
  margin: 0;
  padding: 0px;
  list-style-type: none;
`;

export const TabsItem = styled(Link)`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;

  &.disable {
    background: rgba(151, 186, 244, 0.3);
    color: #9bb0cb;
    pointer-events: none;
  }
  &.active {
    color: #ffffff !important;
    background: #4e86e4 !important;
    border-bottom: 1px solid transparent;
    opacity: 100%;
  }
  &.before {
    background: #eaf1fd;
    color: #475666;
  }
`;

export const TabSwitch = styled.div`
  min-height: 40vh;
  width: 970px;
  height: 540px;
  background: rgba(231, 240, 255, 0.2);
  margin-top: -1px;
  &.is-selected {
    display: block;
  }
`;
