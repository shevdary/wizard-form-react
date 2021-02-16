import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 280px;
  max-width: 280px;
  min-height: 100px;
  padding: 5px 10px;
  resize: none;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border: ${(props) => (props.isError ? '1px solid red' : '1px solid #c1cfe0')};
`;
