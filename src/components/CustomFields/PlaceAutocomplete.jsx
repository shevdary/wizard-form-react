import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// redux
import { userSelector } from 'redux/user/selector';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';
import { useSelector } from 'react-redux';

export const PlaceAutocomplete = (props) => {
  const { input, label, meta } = props;
  const [valueFields, setValueFields] = useState(input.value);
  const user = useSelector(userSelector);

  useEffect(() => {
    if (Object.keys(user).includes(input.name)) {
      setValueFields(Object.assign(user)[input.name]);
    }
  }, [input.name, user]);

  return (
    <InputForm>
      <Label>{label}</Label>
      <GooglePlacesAutocomplete
        {...input}
        name="address"
        type="text"
        selectProps={{
          value: input.value || valueFields,
          onChange: input.onChange,
        }}
      />
      {meta.touched && meta.error && <SpanError>{meta.error}</SpanError>}
    </InputForm>
  );
};
