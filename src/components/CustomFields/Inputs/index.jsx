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
import PropsTypes from 'prop-types';
import { InputField } from '../styled';

const InputComponent = ({
  label,
  type = 'text',
  name,
  isRequired,
  component,
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

InputComponent.propTypes = {
  component: PropsTypes.func.isRequired,
  isVisible: PropsTypes.bool,
  isRequired: PropsTypes.bool,
  name: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired,
  type: PropsTypes.oneOf(['email', 'text', 'password']),
};

export default InputComponent;
