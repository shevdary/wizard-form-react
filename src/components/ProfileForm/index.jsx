import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { Field, reduxForm } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import { update } from 'redux/user/reducers';
// custom fields
import { Button } from 'components/CustomFields/Button';
import { InputComponent } from 'components/CustomFields/Input';
import { DataPicker } from 'components/CustomFields/DataPicker';
import { RadioButton } from 'components/CustomFields/RadioButton';
import { PlaceAutocomplete } from 'components/CustomFields/PlaceAutocomplete';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { validate, asyncValidate } from 'utils/profileValidate';
import { GENDER } from 'utils/optionsValue';
// styled
import { FormFields, Form, FormChild } from 'components/AccountForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/account');
  };

  const onSubmit = (values) => {
    dispatch(update(values));
    history.push('/create-user/contact');
  };

  return (
    <Form className="profile" onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="button" onClick={handleClick} label="Back" name="back" />
    </Form>
  );
};

export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'profileForm',
    validate,
    asyncValidate,
  })(Profile)
);
