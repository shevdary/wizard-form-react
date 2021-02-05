import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { Field, reduxForm, FieldArray } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import { update } from 'redux/user/actions';
import { setPassedTab } from 'redux/tabs/actions';
// components
import Button from 'components/CustomFields/Button';
import PhoneFields from 'components/PhoneFields';
import RenderField from 'components/CustomFields/RenderField';
import InputComponent from 'components/CustomFields/Inputs';
import SelectedFields from 'components/CustomFields/Option';
import RenderNumber from 'components/CustomFields/Inputs/Number';
// utils
import { LANGUAGE } from 'utils/optionsValue';
import { validate } from 'utils/contactValidate';
// styled
import { FormFields, Form, FormChild } from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(update(values));
    dispatch(setPassedTab('contact'));
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
          <InputComponent label="Fax" name="fax" component={RenderNumber} />
          <FieldArray name="phones" maxCountFiled={3} component={PhoneFields} />
        </FormFields>
      </FormChild>
      <Button type="submit" label="Forward" name="forward" />
      <Button type="button" label="Back" onClick={handleClick} name="back" />
    </Form>
  );
};

export default connect((state) => ({
  initialValues: { ...state.user, phones: state.user.phones || [{}] },
}))(
  reduxForm({
    form: 'contactForm',
    onBlur: ['phones'],
    validate,
  })(ContactForm)
);
