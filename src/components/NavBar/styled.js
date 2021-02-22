import styled from 'styled-components';

export const Header = styled.header`
  background: #2f68c8;
  height: 60px;
  color: #2f68c8;
  text-align: center;
  border: none;
`;

export const ContentCenter = styled.div`
  display: inline-flex;
  position: relative;
  width: 970px;
  height: inherit;
`;
export const HeaderUl = styled.ul`
  position: absolute;
  display: flex;
  height: 25px;
  right: 0;
  align-self: center;
`;

export const HeaderLi = styled.li`
  background: transparent;
  height: fit-content;
  margin-left: 60px;
  list-style: none;
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
