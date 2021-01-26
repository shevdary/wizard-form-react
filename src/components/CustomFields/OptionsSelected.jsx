import React, { useState } from 'react';
import Select from 'react-select';
import {
  InputForm,
  Label,
  RequiredField,
} from '../AccountForm/AccountFormStyled';

const SelectedFields = ({ name, label, options, isRequired, component }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <InputForm>
      <Label>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <Select
        name={name}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        component={component}
      />
    </InputForm>
  );
};

export default SelectedFields;
