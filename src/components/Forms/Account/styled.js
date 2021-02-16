import styled from 'styled-components';

export const UserAvatarImage = styled.div`
  display: flex;
  margin-left: ${(props) => props.left};
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
  &.fit-content {
    min-height: 80px;
    height: fit-content;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: calc(100% - 12px);
  border: ${(props) => (props.border ? '1px solid red' : '1px solid #c1cfe0')};
  font-size: 14px;
  padding-left: 10px;
`;

export const Button = styled.button`
  background: transparent;
  width: fit-content;
  color: #ced9e5;
  border: none;
  position: absolute;
  top: 30%;
  right: 10px;
  cursor: pointer;
  img {
    width: 25px;
  }
`;

export const AvatarLabel = styled.label`
  color: #9bb0cb;
  margin: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: grid;
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
