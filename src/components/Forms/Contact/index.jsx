import React from 'react';
import PropsTypes from 'prop-types';

// redux

import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
// components
import Button from 'components/CustomFields/Button';
import PhoneFields from 'components/PhoneFields';
import RenderField from 'components/CustomFields/RenderField';
import InputComponent from 'components/CustomFields/Inputs';
import SelectedFields from 'components/CustomFields/Selected';
import RenderNumber from 'components/CustomFields/Inputs/Number';
// utils
import { LANGUAGE } from 'utils/optionsValue';
import { validate } from 'utils/contactValidate';
// styled
import { FormFields, Form, FormChild } from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = ({ handleSubmit, onSubmit, goBack }) => (
  <Form
    className="contact"
    onSubmit={handleSubmit((values) =>
      onSubmit(values, 'contact', 'capabilities')
    )}
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
        <InputComponent label="Fax" name="fax" component={RenderNumber} />
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
