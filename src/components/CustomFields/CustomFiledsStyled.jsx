import styled from 'styled-components';
import { Field } from 'redux-form';

export const InputField = styled(Field).attrs((props) => ({
  fonts: props.color,
}))`
  height: 40px;
  border: 1px solid #c1cfe0;
  font-size: 14px;
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  position: relative;
  align-items: center;
  margin-top: 10px;
  margin-right: ${(props) => (props.type === 'ckeckbox' ? '0' : '75px')};
  font-weight: ${(props) => (props.ckecked ? 'bold' : 'normal')};
  color: ${(props) => (props.ckecked ? '#242121' : '')};
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  input:checked ~ div {
    background: #4e86e4;
    border: 3px solid #c1cfe0;
  }
`;

export const Ckeckmark = styled.div`
  width: ${(props) => (props.checkbox ? '13px' : ' 17px')};
  height: ${(props) => (props.checkbox ? '13px' : ' 17px')};
  margin-right: 5px;
  border-radius: ${(props) => (props.checkbox ? '0' : '50%')};
  background: #ffffff;
  border: 1px solid #c1cfe0;
  box-sizing: border-box;
`;
