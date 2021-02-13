import React from 'react';
import PropsTypes from 'prop-types';
// redux
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// custom fields
import Button from 'components/Button';
import DataPicker from 'components/FormFields/Inputs/Date';
import RenderField from 'components/FormFields';
import RadioButton from 'components/FormFields/Inputs/Radio';
import InputComponent from 'components/FormFields/Inputs';
import PlaceAutocomplete from 'components/FormFields/PlaceAutocomplete';
// helpers
import { GENDER } from 'utils/optionsValue';
import { validate, asyncValidate } from 'utils/profileValidate';
// styled
import { FormFields, Form, FormChild } from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = ({ handleSubmit, onSubmit, goBack }) => (
  <Form
    className="profile"
    onSubmit={handleSubmit((values) => onSubmit(values, 'contact'))}
  >
    <FormChild>
      <FormFields>
        <InputComponent
          name="firstName"
          isRequired
          label="First name"
          component={RenderField}
        />
        <InputComponent
          label="Last name"
          name="lastName"
          isRequired
          component={RenderField}
        />

        <InputComponent
          name="birthday"
          label="Birth date"
          component={DataPicker}
        />
      </FormFields>
      <FormFields>
        <InputComponent
          label="Email"
          name="email"
          isRequired
          type="email"
          component={RenderField}
        />
        <Field label="Address" name="address" component={PlaceAutocomplete} />
        <Field
          name="gender"
          label="Gender"
          component={RadioButton}
          options={GENDER}
        />
      </FormFields>
    </FormChild>
    <Button label="Forward" type="submit" name="forward" />
    <Button
      type="button"
      onClick={() => goBack('account')}
      label="Back"
      name="back"
    />
  </Form>
);

Profile.propTypes = {
  handleSubmit: PropsTypes.func.isRequired,
  onSubmit: PropsTypes.func.isRequired,
  goBack: PropsTypes.func,
};

export default connect((state) => ({
  initialValues: state.user,
}))(
  reduxForm({
    form: 'profileForm',
    validate,
    enableReinitialize: true,
    asyncValidate,
  })(Profile)
);
