import React from 'react';
import PropsTypes from 'prop-types';
// components
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';

import { Textarea } from '../../styled';

const TextArea = ({ input, isRequired, meta: { touched, error } }) => (
  <InputForm>
    <Label htmlFor="textarea">
      {isRequired && <RequiredField>*</RequiredField>}
    </Label>
    <div>
      <Textarea
        {...input}
        component="textarea"
        isError={touched && error}
        value={input.value}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);

TextArea.propTypes = {
  input: PropsTypes.object.isRequired,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default TextArea;
