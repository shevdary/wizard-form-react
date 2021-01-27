import styled from 'styled-components';
import { Field } from 'redux-form';

export const InputField = styled(Field).attrs((props) => ({
  fonts: props.color,
}))`
  height: 40px;
  border: 1px solid #c1cfe0;
  font-size: 14px;
`;
