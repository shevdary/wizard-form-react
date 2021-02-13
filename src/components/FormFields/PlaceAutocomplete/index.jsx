import React from 'react';
import PropsTypes from 'prop-types';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// styled
import { GoogleAutocomplete } from 'components/Forms/Contact/styled';
import { InputForm, Label, SpanError } from 'components/Forms/Account/styled';
import { ReactSelect } from '../styled';

const PlaceAutocomplete = ({ input, label, meta: { error, touched } }) => (
  <InputForm>
    <Label>{label}</Label>
    <GoogleAutocomplete>
      <GooglePlacesAutocomplete
        {...input}
        name="address"
        type="text"
        borderError={touched && error}
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

PlaceAutocomplete.propTypes = {
  input: PropsTypes.object.isRequired,
  label: PropsTypes.string.isRequired,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default PlaceAutocomplete;
