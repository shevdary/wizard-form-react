import styled from 'styled-components';

export const CustomButton = styled.button`
  background: ${(props) => {
    if (props.name === 'forward') return '#5e97f3';
    if (props.name === 'finish') return '#4ee4a5';
    if (props.name === 'back') return '#c1cfe0';
  }};
  text-align: center;
  height: 40px;
  width: 100px;
  float: right;
  border: none;
  color: #ffffff;
  margin-left: 100px;
  cursor: pointer;
`;
