import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
// validate fields
import { optionsLanguage } from 'utils/optionsValue';
import { renderField } from 'utils/reduxValidateField';
import { validate } from 'utils/contactValidate';
// custom fields
import { InputComponent } from '../CustomFields/Input';
import { SelectedFields } from '../CustomFields/Options';
import Button from '../CustomFields/Button';
// styled
import { Form, InputForm } from '../AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from '../ProfileForm/styled';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import PhoneFields from '../PhoneFields';

const ContactForm = () => {
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
          <Field
            label="Main language"
            name="language"
            type="options"
            isRequired
            options={optionsLanguage}
            component={SelectedFields}
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
            <PhoneFields />
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
  validate,
})(ContactForm);
