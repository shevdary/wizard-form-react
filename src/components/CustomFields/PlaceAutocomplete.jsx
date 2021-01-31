import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';

export const PlaceAutocomplete = (props) => {
  const { input, label, meta } = props;

  return (
    <InputForm>
      <Label>{label}</Label>
      <GooglePlacesAutocomplete
        {...input}
        name="address"
        type="text"
        selectProps={{
          value: input.value,
          onChange: input.onChange,
        }}
        onChange={input.onChange}
      />
      {meta.touched && meta.error && <SpanError>{meta.error}</SpanError>}
    </InputForm>
  );
};
