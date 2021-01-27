import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Alert = styled.div`
  width: 970px;
  height: 42px;
  position: absolute;
  display: flex;
  place-items: center;
  color: white;
  background: #5e97f3;
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
