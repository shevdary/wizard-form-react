/* eslint-disable*/
import React from 'react';
import { reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
// custom fields
import { InputComponent } from '../CustomFields/Input';
import SelectedFields from '../CustomFields/OptionsSelected';
import Button from '../CustomFields/Button';
// styled
import { Form, InputForm } from '../AccountForm/AccountFormStyled';
import {
  FlexColumn,
  LeftSide,
  RightSide,
} from '../ProfileForm/ProfileFormStyled';
import { AddNumber } from './ContactFormStyled';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import InputMask from 'react-input-mask';
import { optionsLanguage } from '../../utils/optionsValue';
import { renderField } from '../../utils/reduxValidateField';

const ContactForm = ({ value }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/profile');
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <form>
      <Form className="account">
        <LeftSide>
          <InputComponent
            label="Company"
            isRequired
            name="company"
            type="text"
            component={renderField}
          />
          <InputComponent
            label="Github link"
            name="githubLink"
            type="text"
            component={renderField}
          />
          <InputComponent
            label="Facebook link"
            name="facebook"
            type="text"
            component={renderField}
          />
          <SelectedFields
            isRequired
            name="language"
            label="Main language"
            options={optionsLanguage}
            component={renderField}
          />
        </LeftSide>
        <RightSide>
          <InputComponent
            label="Fax"
            name="fax"
            type="text"
            component={renderField}
          />
          <InputForm>
            <InputMask
              mask="+38 (099) 999-99-99"
              placeholder="+38 (099) 999-99-99"
              value={value}
            />
            <AddNumber>add phone number</AddNumber>
          </InputForm>
          <FlexColumn>
            <Button type="submit" onClick={handleSubmit} label="Forward" />
            <Button name="backForm" label="Back" onClick={handleClick} />
          </FlexColumn>
        </RightSide>
      </Form>
    </form>
  );
};

export default reduxForm({
  form: 'userContact',
})(ContactForm);
