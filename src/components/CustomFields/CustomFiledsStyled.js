import styled from 'styled-components';
import { Field } from 'redux-form';

export const InputField = styled(Field).attrs((props) => ({
  fonts: props.color,
}))`
  height: 40px;
  border: 1px solid #c1cfe0;
  font-size: 14px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;

  ${HiddenCheckbox}:focus + & {
    background: #4E86E4;
    width: 10px;
    height: 10px;
    border: 5px solid #C1CFE0;
    
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
  }
`;
