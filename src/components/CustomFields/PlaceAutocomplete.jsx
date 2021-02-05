import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// styled
import { GoogleAutocomplete } from 'components/Forms/Contact/styled';
import { InputForm, Label, SpanError } from 'components/Forms/Account/styled';
import { ReactSelect } from './styled';

const PlaceAutocomplete = ({ input, label, meta: { error, touched } }) => (
  <InputForm>
    <Label>{label}</Label>
    <GoogleAutocomplete>
      <GooglePlacesAutocomplete
        {...input}
        name="address"
        type="text"
        className={touched && error && 'error'}
        selectProps={{
          value: input.value,
          onChange: input.onChange,
          styles: ReactSelect,
        }}
      />
    </GoogleAutocomplete>
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);

export default PlaceAutocomplete;
