import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// custom fields
import Button from '../CustomFields/Button';
import { redirectStep } from '../../redux/user/reducers';
import { InputComponent } from '../CustomFields/Input';
import { DataPickerInput } from '../CustomFields/DataPickerField';
import { RadioSelected } from '../CustomFields/RadioSelected';
// styled
import {
  Form,
  Input,
  InputForm,
  Label,
  SpanError,
} from '../AccountForm/styled';
import { RadioSelect, FlexColumn, Inputs, RightSide, LeftSide } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import { profileDataValidate } from '../../utils/accountValidate';

const renderField = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = props;
  return (
    <InputForm>
      <Label>{label}</Label>
      <Inputs {...input} placeholder={label} type={type} />
      {touched && error && <SpanError>{error}</SpanError>}
    </InputForm>
  );
};

const Index = ({ handleSubmit }) => {
  const { nextStep } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(redirectStep('0'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/account');
  };

  if (nextStep && nextStep === '2')
    return <Redirect to="/create-user/contact" />;

  return (
    <form>
      <Form className="account">
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
          <DataPickerInput name="birthday" dateFormat="dd/MM/yyyy" />
        </LeftSide>
        <RightSide>
          <InputComponent
            label="Email"
            name="email"
            isRequired
            type="email"
            component={renderField}
          />
          <InputForm>
            <Label htmlFor="address">Address</Label>
            {/* <GooglePlacesAutocomplete apiKey="" /> */}
            <Input name="address" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label>Gender</Label>
            <RadioSelect>
              <RadioSelected
                name="gender"
                options={['male', 'female']}
                component={renderField}
              />
            </RadioSelect>
          </InputForm>
          <FlexColumn>
            <Button
              type="submit"
              onClick={handleSubmit(profileDataValidate)}
              label="Forward"
            />
            <Button onClick={handleClick} label="Back" name="backForm" />
          </FlexColumn>
        </RightSide>
      </Form>
    </form>
  );
};

export default reduxForm({
  form: 'userProfile',
})(Index);
