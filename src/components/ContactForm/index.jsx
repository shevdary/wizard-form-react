import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { Field, reduxForm, FieldArray } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import { update } from 'redux/user/actions';
// components
import { InputComponent } from 'components/CustomFields/Input';
import { SelectedFields } from 'components/CustomFields/Options';
import { Button } from 'components/CustomFields/Button';
import PhoneFields from 'components/PhoneFields';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { LANGUAGE } from 'utils/optionsValue';
import { validate } from 'utils/contactValidate';
// styled
import { FormFields, Form, FormChild } from 'components/AccountForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(update(values));
    history.push('/create-user/capabilities');
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/profile');
  };

  return (
    <Form className="contact" onSubmit={handleSubmit(onSubmit)}>
      <FormChild>
        <FormFields>
          <InputComponent
            label="Company"
            isRequired
            name="company"
            component={RenderField}
          />
          <InputComponent
            label="Github link"
            name="github"
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
            options={LANGUAGE}
            component={SelectedFields}
          />
        </FormFields>
        <FormFields>
          <InputComponent label="Fax" name="fax" component={RenderField} />
          <FieldArray name="phone" maxCountFiled={3} component={PhoneFields} />
        </FormFields>
      </FormChild>
      <Button type="submit" label="Forward" name="forward" />
      <Button type="button" label="Back" onClick={handleClick} name="back" />
    </Form>
  );
};

export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'contactForm',
    validate,
  })(ContactForm)
);
