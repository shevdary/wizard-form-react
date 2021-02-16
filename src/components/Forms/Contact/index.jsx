import React from 'react';
import PropsTypes from 'prop-types';
// store
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// components
import Button from 'components/Button';

import RenderField from 'components/Forms/FieldWrapper';
import InputComponent from 'components/Inputs/InputWrapper';
import SelectedFields from 'components/Inputs/Selected';
import Phone from 'components/Inputs/Phone';
// helpers
import { LANGUAGE } from 'utils/optionsValue';
import { validate } from 'utils/contactValidate';
// styled
import { FormFields, Form, FormChild } from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneFields from './components/PhoneWrapper';

const ContactForm = ({ handleSubmit, onSubmit, goBack }) => (
  <Form
    className="contact"
    onSubmit={handleSubmit((values) => onSubmit(values, 'capabilities'))}
  >
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
        <InputComponent label="Fax" name="fax" component={Phone} />
        <FieldArray name="phones" maxCountFiled={3} component={PhoneFields} />
      </FormFields>
    </FormChild>
    <Button type="submit" label="Forward" name="forward" />
    <Button
      type="button"
      label="Back"
      onClick={() => goBack('profile')}
      name="back"
    />
  </Form>
);

ContactForm.propTypes = {
  handleSubmit: PropsTypes.func.isRequired,
  onSubmit: PropsTypes.func.isRequired,
  goBack: PropsTypes.func,
};

export default connect((state) => ({
  initialValues: { ...state.user, phones: state.user.phones || [''] },
}))(
  reduxForm({
    form: 'contactForm',
    onBlur: ['phones'],
    enableReinitialize: true,
    validate,
  })(ContactForm)
);
