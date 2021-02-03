import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';
import { ReactSelect } from './styled';

export const PlaceAutocomplete = ({ input, label, meta }) => (
  <InputForm>
    <Label>{label}</Label>
    <GooglePlacesAutocomplete
      {...input}
      name="address"
      type="text"
      selectProps={{
        value: input.value,
        onChange: input.onChange,
        styles: ReactSelect,
      }}
    />
    {meta.touched && meta.error && <SpanError>{meta.error}</SpanError>}
  </InputForm>
);
