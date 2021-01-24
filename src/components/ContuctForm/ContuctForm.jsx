/* eslint-disable*/
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import {
  BackButton,
  Form,
  ForwardButton,
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from '../AccountForm/AccountFormStyled';

import 'react-datepicker/dist/react-datepicker.css';
import {
  FlexColumn,
  LeftSide,
  RightSide,
  Inputs,
} from '../ProfileForm/ProfileFormStyled';

import { AddNumber } from './ContactFormStyled';

const options = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
  { value: 'ar', label: 'Arabic' },
  { value: 'cmn', label: 'Mandarin' },
  { value: 'ru', label: 'Russian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'hi', label: 'Hindi' },
  { value: 'ms', label: 'Malay' },
  { value: 'fa', label: 'Persian' },
  { value: 'sw', label: 'Swahili' },
  { value: 'ta', label: 'Tamil' },
  { value: 'it', label: 'Italian' },
  { value: 'nl', label: 'Dutch' },
  { value: 'bn', label: 'Bengali' },
  { value: 'tr', label: 'Turkish' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'pl', label: 'Polish' },
  { value: 'jv', label: 'Javanese' },
  { value: 'pa', label: 'Punjabi' },
  { value: 'th', label: 'Thai' },
  { value: 'ko', label: 'Korean' },
];

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
      <div>
        <Inputs {...input} placeholder={label} type={type} />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};

const ContactForm = ({ value }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();
  return (
    <form>
      <Form className="account">
        <LeftSide>
          <InputForm>
            <Label htmlFor="company">Company</Label>
            <Inputs name="company" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="githubLink">
              Github link
              <RequiredField>*</RequiredField>
            </Label>
            <Inputs name="githubLink" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="githubLink">
              Facebook link
              <RequiredField>*</RequiredField>
            </Label>
            <Inputs name="githubLink" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label>Main language</Label>
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          </InputForm>
        </LeftSide>
        <RightSide>
          <InputForm>
            <Label htmlFor="fax">
              Fax
              <RequiredField>*</RequiredField>
            </Label>
            <Inputs name="fax" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <InputMask
              mask="+38 (099) 999-99-99"
              placeholder="+38 (099) 999-99-99"
              value={value}
            />
            <AddNumber>add phone number</AddNumber>
          </InputForm>
          <FlexColumn>
            <ForwardButton type="submit" onClick={(e) => e.preventDefault()}>
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
  form: 'userContact',
})(ContactForm);
