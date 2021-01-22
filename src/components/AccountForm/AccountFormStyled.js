import styled from 'styled-components';
import { Field } from 'redux-form';

export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  width: 171px;
  height: 171px;
  border: 3px solid #5e97f3;
  border-radius: 50%;
  background: #ffffff;
  overflow: hidden;

  svg {
    transform: translate(0px, 20px);
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftBlock = styled.div`
  margin: 40px 0 0 100px;
  text-align: center;
`;

export const RightBlock = styled.div`
  margin-top: 20px;
  margin-right: 100px;
  width: 400px;
  position: relative;
`;

export const InputForm = styled.div`
  width: 100%;
  display: flex;
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

export const Button = styled.button`
  background: transparent;
  width: fit-content;
  color: #ced9e5;
  border: none;
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
`;

export const ForwardButton = styled.button`
  height: 40px;
  width: 100px;
  float: right;
  text-align: center;
  background: #5e97f3;
  border: none;
  color: #ffffff;
  position: absolute;
  top: 100%;
  right: 0;
  cursor: pointer;
`;

export const AddAvatar = styled.input.attrs((props) => ({
  type: props.type,
}))`
  display: none;
`;

export const AvatarLabel = styled.label`
  color: #9bb0cb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
