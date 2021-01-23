/* eslint-disable */
import React, { useState } from 'react';
import {
  BackButton,
  Form,
  ForwardButton,
  Input,
  InputForm,
  Label,
  LeftBlock,
  RequiredField,
  RightBlock,
  SpanError,
} from '../AccountForm/AccountFormStyled';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';
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
      <Label> {label}</Label>
      <div>
        <Inputs {...input} placeholder={label} type={type} />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};

const ProfileForm = ({ name, value }) => {
  const [startDate, setStartDate] = useState();
  const [selectGender, setSelectGender] = useState('female');
  const onChange = (event) => {
    setSelectGender(event.target.value);
  };
  return (
    <form>
      <Form className="account">
        <LeftSide>
          <InputForm>
            <Label htmlFor="firstName">
              First name <RequiredField>*</RequiredField>
            </Label>
            <Input name="firstName" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="lastName">
              Last name <RequiredField>*</RequiredField>
            </Label>
            <Input name="lastName" type="text" component={renderField} />
          </InputForm>
          <InputMask
            mask="99/99/9999"
            placeholder="Enter birthdate"
            value={startDate}
          />
          <DatePicker
            selected={startDate}
            dateFormat="dd/mm/yyyy"
            onChange={(date) => setStartDate(date)}
            inline
          />
        </LeftSide>
        <RightSide>
          <InputForm>
            <Label htmlFor="email">
              Email <RequiredField>*</RequiredField>
            </Label>
            <Input name="email" type="email" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="address">
              Address <RequiredField>*</RequiredField>
            </Label>
            <Input name="address" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label>Gender</Label>
            <RadioSelect>
              <label>
                <Field
                  name="sex"
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
                  name="sex"
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
            <ForwardButton type="submit" onClick={(e) => e.preventDefault()}>
              Forward
            </ForwardButton>
            <BackButton
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(selectGender);
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
