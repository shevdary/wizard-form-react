import styled from 'styled-components';

export const ButtonForPhone = styled.button`
  display: ${(props) => props.count < 2 && 'none'};
  background: transparent;
  border: none;
  color: #657c9a;
  font-size: 14px;
`;
