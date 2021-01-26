import styled from 'styled-components';

export const NavPanel = styled.div`
  background: #2f68c8;
  width: 100vw;
  color: #2f68c8;
  height: 60px;
  border: none;
`;

export const NavItem = styled.div`
  display: inline-flex;
  width: 100vw;
  height: inherit;
`;

export const OpacityButton = styled.button`
  background: transparent;
  height: fit-content;
  border: 0px none;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export const TranslucentButton = styled.button`
  background: transparent;
  height: fit-content;
  border: 0px none;
  color: white;
  font-size: 14px;
  opacity: 50%;
  cursor: pointer;
`;

export const Logo = styled.a`
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: 'cursive';
`;
