import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { setCurrentTab } from 'redux/tabs/reducers';
import { userFormSelector } from 'redux/user/selector';
// components
import { InputComponent } from 'components/CustomFields/Input';
import { SelectedFields } from 'components/CustomFields/Options';
import { Button } from 'components/CustomFields/Button';
import PhoneFields from 'components/PhoneFields';
import { RenderField } from 'components/CustomFields/RenderField';
import { FlexColumn } from 'components/ProfileForm/styled';
// validate fields
import { optionsLanguage } from 'utils/optionsValue';
import { validate } from 'utils/contactValidate';
// styled
import { Form, FormFields, InputForm } from 'components/AccountForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const values = useSelector(userFormSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(submit('steps'));
    if (!values.syncErrors) {
      dispatch(setCurrentTab('contact'));
      history.push('/create-user/capabilities');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/profile');
  };

  return (
    <Form className="contact">
      <FormFields>
        <InputComponent
          label="Company"
          isRequired
          name="company"
          component={RenderField}
        />
        <InputComponent
          label="Github link"
          name="githubLink"
          component={RenderField}
        />
        <InputComponent
          label="Facebook link"
          name="facebook"
          component={RenderField}
        />
        <Field
          label="Main language"
          name="language"
          type="options"
          isRequired
          options={optionsLanguage}
          component={SelectedFields}
        />
      </FormFields>
      <FormFields>
        <InputComponent label="Fax" name="fax" component={RenderField} />
        <InputForm>
          <PhoneFields />
        </InputForm>
        <FlexColumn>
          <Button type="forward" onClick={handleSubmit} label="Forward" />
          <Button name="backForm" label="Back" onClick={handleClick} />
        </FlexColumn>
      </FormFields>
    </Form>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: validate,
})(ContactForm);
