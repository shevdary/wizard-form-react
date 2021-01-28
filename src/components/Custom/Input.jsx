import React, { useState } from 'react';
// icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// styled
import { Button, InputForm, Label, RequiredField } from 'components/AccountForm/styled';
import { InputField } from './CustomFiledsStyled';

export const InputComponent = ({
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
      <Label htmlFor="password">
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <InputField
        name={name}
        type={typeField}
        component={component}
        placeholder={placeholder}
        onClick={onClick}
      />
      {isVisible && (
        <Button onClick={handleChange}>
          {isVisibleField ? (
            <VisibilityOffIcon fontSize="small" />
          ) : (
            <VisibilityIcon fontSize="small" />
          )}
        </Button>
      )}
    </InputForm>
  );
};