import React, { useState } from 'react';
// assets
import hide from 'assets/icon/hiddenPassword.svg';
import visible from 'assets/icon/visiblePassword.svg';

// styled
import {
  Button,
  InputForm,
  Label,
  RequiredField,
} from 'components/Forms/Account/styled';
import { InputField } from '../styled';

const InputComponent = ({
  label,
  type,
  name,
  isRequired,
  component,
  placeholder,
  onClick,
  isVisible,
}) => {
  const [isVisibleField, setIsVisibleField] = useState(false);
  const [typeField, setTypeField] = useState(type);

  const handleChange = () => {
    setIsVisibleField(!isVisibleField);

    if (typeField === 'password') {
      setTypeField('text');
    } else {
      setTypeField('password');
    }
  };

  return (
    <InputForm>
      <Label htmlFor={name}>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <InputField
        id={name}
        name={name}
        type={typeField}
        component={component}
        placeholder={placeholder}
        onClick={onClick}
      />
      {isVisible && (
        <Button type="button" onClick={handleChange}>
          {isVisibleField ? (
            <img src={hide} alt="hidepass" />
          ) : (
            <img src={visible} alt="showPass" />
          )}
        </Button>
      )}
    </InputForm>
  );
};
export default InputComponent;
