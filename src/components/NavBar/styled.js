import styled from 'styled-components';

export const NavPanel = styled.div`
  background: #2f68c8;
  width: 100vw;
  height: 60px;
  color: #2f68c8;
  text-align: center;
  border: none;
`;

export const NavItem = styled.div`
  display: inline-flex;
  position: relative;
  width: 970px;
  height: inherit;
`;

export const HeaderButton = styled.button`
  background: transparent;
  height: fit-content;
  margin-left: 60px;
  border: 0px none;
  color: white;
  font-size: 14px;
  opacity: ${(props) => (props.active ? '100%' : '50%')};
  cursor: pointer;
`;

export const Logo = styled.a`
  align-self: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: 'cursive';
`;
