import React from 'react';
import PropsTypes from 'prop-types';
// redux
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// custom fields
import Button from 'components/CustomFields/Button';
import DataPicker from 'components/CustomFields/Inputs/Date';
import RenderField from 'components/CustomFields/RenderField';
import RadioButton from 'components/CustomFields/Inputs/Radio';
import InputComponent from 'components/CustomFields/Inputs';
import PlaceAutocomplete from 'components/CustomFields/PlaceAutocomplete';
// utils
import moment from 'moment';
import { GENDER } from 'utils/optionsValue';
import { validate, asyncValidate } from 'utils/profileValidate';
// styled
import { FormFields, Form, FormChild } from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = ({ handleSubmit, onSubmit, goBack }) => (
  <Form
    className="profile"
    onSubmit={handleSubmit((values) => onSubmit(values, 'profile', 'contact'))}
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
  initialValues: {
    ...state.user,
    birthday: moment(state.user.birthday).toDate(),
  },
}))(
  reduxForm({
    form: 'profileForm',
    enableReinitialize: true,
    validate,
    asyncValidate,
  })(Profile)
);
