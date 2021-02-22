import styled from 'styled-components';

export const PageWrapper = styled.ul`
  display: inline-flex;
  margin-top: 15px;
`;

export const PageList = styled.li`
  width: 25px;
  height: 25px;
  margin: 1px;
  position: relative;
  text-align: center;
  border-radius: 3px;
  border: 2px solid #e7f0ff;
  list-style-type: none;
  transform: ${(props) =>
    props.pageType === 'next' ? 'rotateZ( 180deg)' : null};
  &.active {
    background: #e7f0ff;
  }
  &.firstSwitch {
    order: ${(props) => (props.pageType === 'previous' ? -1 : 0)}
`;

export const Page = styled.button`
  text-decoration: none;
  width: 100%;
  color: black;
  background: transparent;
  position: absolute;
  border: none;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 1%;
  outline: none;
`;
export const Img = styled.img`
  margin: ${(props) => (props.type === 'next' ? '0 2px 0 0' : '0 0 0 -2px')};
  transform: ${(props) => (props.type === 'next' ? 'rotateZ( 180deg)' : null)};
`;
