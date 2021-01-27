import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';

export const PlaceAutocomplete = ({
  input,
  label,
  meta: { error, touched },
}) => (
  <InputForm>
    <Label>{label}</Label>
    <GooglePlacesAutocomplete
      {...input}
      name="address"
      type="text"
      onChange={input.onChange}
    />
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);
