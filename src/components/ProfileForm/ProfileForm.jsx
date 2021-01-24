/* eslint-disable */
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import { profileDataValidate } from '../../helpers/accountValidate';
import {
  BackButton,
  Form,
  ForwardButton,
  Input,
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from '../AccountForm/AccountFormStyled';

import {
  RadioSelect,
  FlexColumn,
  Inputs,
  RightSide,
  LeftSide,
} from './ProfileFormStyled';
import 'react-datepicker/dist/react-datepicker.css';

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

const renderDatePicker = (props) => {
  const {
    input,
    className,
    inline,
    open,
    onChange,
    meta: { touched, error },
  } = props;

  return (
    <div>
      <DatePicker
        {...input}
        open={open}
        selected={input.value}
        type="date"
        inline={inline}
        className={className}
        name="birthday"
        dateFormat="dd/MM/yyyy"
        onChange={onChange}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const ProfileForm = ({ handleSubmit }) => {
  const [startDate, setStartDate] = useState();
  const [selectGender, setSelectGender] = useState('female');
  const history = useHistory();
  const onChange = (event) => {
    setSelectGender(event.target.value);
  };
  return (
    <form>
      <Form className="account">
        <LeftSide>
          <InputForm>
            <Label htmlFor="firstName">
              First name
              <RequiredField>*</RequiredField>
            </Label>
            <Input name="firstName" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="lastName">
              Last name
              <RequiredField>*</RequiredField>
            </Label>
            <Input name="lastName" type="text" component={renderField} />
          </InputForm>
          <Field
            name="birthday"
            open={false}
            onChange={(date) => setStartDate(date)}
            placeholderText="DD/MM/YYYY"
            dateFormat="dd/MM/yyyy"
            component={renderDatePicker}
          />
          <Field
            selected={startDate}
            name="birthday"
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setStartDate(date)}
            component={renderDatePicker}
            inline
          />
        </LeftSide>
        <RightSide>
          <InputForm>
            <Label htmlFor="email">
              Email
              <RequiredField>*</RequiredField>
            </Label>
            <Input name="email" type="email" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="address">Address</Label>
            {/* <GooglePlacesAutocomplete apiKey="" /> */}
            <Input name="address" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label>Gender</Label>
            <RadioSelect>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="male"
                  onChange={onChange}
                  checked={selectGender === 'male'}
                />
                Male
              </label>
              <Label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="female"
                  checked={selectGender === 'female'}
                  onChange={onChange}
                />
                Female
              </Label>
            </RadioSelect>
          </InputForm>
          <FlexColumn>
            <ForwardButton
              type="submit"
              onClick={handleSubmit(profileDataValidate)}
            >
              Forward
            </ForwardButton>
            <BackButton
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                history.goBack();
              }}
            >
              Back
            </BackButton>
          </FlexColumn>
        </RightSide>
      </Form>
    </form>
  );
};

export default reduxForm({
  form: 'userProfile',
})(ProfileForm);
