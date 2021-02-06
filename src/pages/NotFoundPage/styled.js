import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  width: 970px;
  height: calc(100vh - 300px);
  background: rgba(151, 186, 244, 0.3);
  background-image: url(${(props) => props.src});
  background-size: 350px;
  background-repeat: no-repeat;
  margin: 100px auto;
  color: rgba(71, 86, 102, 0.5);
  font-size: 26px;
  background-position-x: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ErrorTitle = styled.h1`
  align-self: center;
`;
export const ErrorSub = styled.sub`
  font-size: 26px;
  align-self: center;
`;

export const RedirectButton = styled.button`
  background: #98aac8;
  align-self: center;
  color: white;
  padding: 15px;
  border: 0;
  border-radius: 0;
  margin-left: 15px;
  font-size: 16px;
  bottom: 25%;
`;
export const ButtonWrapper = styled.div`
  align-self: center;
  margin-bottom: 150px;
`;
