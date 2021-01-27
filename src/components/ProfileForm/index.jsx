/*eslint-disable*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { addUserData, redirectToNextStep } from 'redux/user/reducers';
// custom fields
import Button from 'components/Custom/Button';
import { InputComponent } from 'components/Custom/Input';
import { DataPicker } from 'components/Custom/DataPicker';
import { RadioButton } from 'components/Custom/RadioButton';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { RadioSelect, FlexColumn, RightSide, LeftSide } from './styled';
import { PlaceAutocomplete } from 'components/Custom/PlaceAutocomplete';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import { renderField } from 'utils/reduxValidateField';
import { profileValidate } from 'utils/profileValidate';

const Index = () => {
  const { nextStep } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const values = useSelector((state) => state.form.steps);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (values) {
      dispatch(redirectToNextStep('profile'));

      dispatch(addUserData(values.values));
      history.push('/create-user/account');
    }
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
            <RadioButton
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
  form: 'steps',
  validate: profileValidate,
})(Index);
