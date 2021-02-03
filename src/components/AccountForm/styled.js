import styled from 'styled-components';
import { Field } from 'redux-form';

export const UserAvatarImage = styled.div`
  display: flex;
  margin-top: 10px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => (props.border ? '3px solid #5e97f3' : 'none')};
  border-radius: 50%;
  background: #ffffff;
  overflow: hidden;
  justify-content: center;
  img {
    transform: ${(props) =>
      props.crop ? 'translate(0px, 20px)' : 'translate(0px, 0px)'};
  }
`;

export const Form = styled.form`
  padding: 75px 100px 0 100px;
  height: 350px;
`;

export const FormChild = styled.div`
  height: 320px;
  display: flex;
  justify-content: space-between;
`;

export const InputForm = styled.div`
  height: 80px;
  display: flex;
  text-align: start;
  width: 100%;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  color: #657c9a;
`;

export const Input = styled(Field)`
  height: 40px;
  border: 1px solid #c1cfe0;
  font-size: 14px;
`;

export const Inputs = styled.input`
  height: 40px;
  width: 100%;
  border: ${(props) => (props.error ? '1px solid red' : '1px solid #c1cfe0')};
  font-size: 14px;
`;

export const Button = styled.button`
  background: transparent;
  width: fit-content;
  color: #ced9e5;
  border: none;
  position: absolute;
  top: 35%;
  right: 10px;
  cursor: pointer;
`;

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

export const AvatarLabel = styled.label`
  color: #9bb0cb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  & i {
    margin-left: 40px;
  }
`;

export const RequiredField = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  top: 35%;
  right: 0px;
`;

export const Label = styled.label`
  display: inline-flex;
  position: relative;
  &.label-small {
    width: 50%;
  }
`;

export const SpanError = styled.span`
  color: red;
`;

export const FormFields = styled.div`
  width: ${(props) => (props.big ? '400px' : '300px')};
`;
