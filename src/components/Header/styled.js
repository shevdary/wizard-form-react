import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Alert = styled.div`
  width: 970px;
  height: 42px;
  position: absolute;
  place-items: center;
  display: flex;
  color: white;
  background: #5e97f3;
  &.visible {
    display: flex;
  }
  &.hidden {
    display: none;
  }
`;

export const LinkAlert = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const Text = styled.p`
  margin-left: 25px;
  font-size: 16px;
  color: white;
`;

export const ButtonTransparent = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 15px;
`;
