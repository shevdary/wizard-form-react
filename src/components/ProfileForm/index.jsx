import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { Field, reduxForm, submit } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { userFormSelector, userSelector } from 'redux/user/selector';
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
import { gender } from 'utils/optionsValue';
// styled
import { Form, FormFields } from 'components/AccountForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Profile = ({ initialize }) => {
  const userStore = useSelector(userFormSelector);
  const value = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    initialize(value);
  }, [value, initialize]);

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/account');
  };

  const handleSubmit = () => {
    const { values } = userStore;
    dispatch(submit('steps'));
    asyncValidate(values)
      .then(() => {
        if (!userStore.syncErrors) {
          dispatch(update({ values, history }));
        }
      })
      .catch(() => {});
  };

  return (
    <>
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
      </Form>
      <Button onClick={handleSubmit} label="Forward" type="forward" />
      <Button type="back" onClick={handleClick} label="Back" />
    </>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: asyncValidate,
})(Profile);
