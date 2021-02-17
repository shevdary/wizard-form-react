import styled from 'styled-components';

export const PageWrapper = styled.ul`
  display: inline-flex;
  margin-top: 15px;
`;

export const PageList = styled.li`
  width: 20px;
  height: 20px;
  margin: 1px;
  position: relative;
  text-align: center;
  border-radius: 3px;
  border: 2px solid #e7f0ff;
  list-style-type: none;
  &.active {
    background: #e7f0ff;
  }
`;

export const PageLink = styled.a`
  text-decoration: none;
  width: 100%;
  color: black;
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 1%;
}
`;
export const Img = styled.img`
  margin: ${(props) => (props.type === 'next' ? '0 2px 0 0' : '0 0 0 2px')};
  transform: ${(props) => (props.type === 'next' ? 'rotateZ( 180deg)' : null)};
`;
