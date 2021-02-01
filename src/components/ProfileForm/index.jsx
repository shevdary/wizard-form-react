import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { setCurrentTab } from 'redux/tabs/reducers';
import { userFormSelector } from 'redux/user/selector';
// custom fields
import { Button } from 'components/CustomFields/Button';
import { InputComponent } from 'components/CustomFields/Input';
import { DataPicker } from 'components/CustomFields/DataPicker';
import { RadioButton } from 'components/CustomFields/RadioButton';
import { PlaceAutocomplete } from 'components/CustomFields/PlaceAutocomplete';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { validate, asyncValidate } from 'utils/profileValidate';
import { gender } from 'utils/optionsValue';
// styled
import { Form, FormFields } from 'components/AccountForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = () => {
  const values = useSelector(userFormSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/account');
  };

  const handleSubmit = () => {
    dispatch(submit('steps'));
    asyncValidate(values.values)
      .then(() => {
        if (!values.syncErrors) {
          dispatch(setCurrentTab('profile'));
          history.push('/create-user/contact');
        }
      })
      .catch((error) => console.log(error, 'er'));
  };

  return (
    <Form className="profile">
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
        <Field
          label="Address"
          name="address"
          values="value"
          component={PlaceAutocomplete}
        />
        <Field name="gender" component={RadioButton} options={gender} />
      </FormFields>
      <Button onClick={handleSubmit} label="Forward" type="forward" />
      <Button type="back" onClick={handleClick} label="Back" />
    </Form>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: asyncValidate,
})(Profile);
