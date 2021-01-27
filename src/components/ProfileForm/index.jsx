/*eslint-disable*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// custom fields
import Button from '../CustomFields/Button';
import { InputComponent } from '../CustomFields/Input';
import { DataPicker } from '../CustomFields/DataPickerField';
import { RadioSelected } from '../CustomFields/RadioSelected';
// styled
import { Form, InputForm, Label } from '../AccountForm/styled';
import { RadioSelect, FlexColumn, RightSide, LeftSide } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import { PlaceAutocomplete } from '../CustomFields/PlaceAutocomplete';
// utils
import { renderField } from 'utils/reduxValidateField';
import { profileValidate } from 'utils/profileValidate';

const Index = () => {
  const { nextStep } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const values = useSelector((state) => state.form.profile);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/account');
  };

  const handleSubmit = () => {
    const { firstName, lastName, birthday, address } = values;
    /*dispatch(redirectToNextStep('profile'));
    dispatch(redirectStep('2'));
    dispatch(addUserData({ firstName, lastName, birthday, address }));*/
  };

  if (nextStep && nextStep === '2')
    return <Redirect to="/create-user/contact" />;

  return (
    <Form className="profile">
      <LeftSide>
        <InputComponent
          name="firstName"
          type="text"
          isRequired
          label="First name"
          component={renderField}
        />
        <InputComponent
          label="Last name"
          name="lastName"
          type="text"
          isRequired
          component={renderField}
        />
        <Field
          name="birthday"
          dateFormat="dd/MM/yyyy"
          label="Birth date"
          type="date"
          component={DataPicker}
        />
      </LeftSide>
      <RightSide>
        <InputComponent
          label="Email"
          name="email"
          isRequired
          type="email"
          component={renderField}
        />
        <Field
          label="Address"
          name="address"
          type="text"
          component={PlaceAutocomplete}
        />
        <InputForm>
          <Label>Gender</Label>
          <RadioSelect>
            <RadioSelected
              name="gender"
              type="radio"
              options={['male', 'female']}
              checked="male"
              component={renderField}
            />
          </RadioSelect>
        </InputForm>
        <FlexColumn>
          <Button type="submit" onClick={handleSubmit} label="Forward" />
          <Button onClick={handleClick} label="Back" name="backForm" />
        </FlexColumn>
      </RightSide>
    </Form>
  );
};

export default reduxForm({
  form: 'profile',
  validate: profileValidate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Index);
