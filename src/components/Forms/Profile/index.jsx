import React from 'react';
import PropsTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
// redux
import { updateUser } from 'redux/user/actions';
import { setCurrentTab } from 'redux/tabs/actions';
import { Field, reduxForm } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
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

const Profile = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push('/create-user/account');
  };

  const onSubmit = (values) => {
    dispatch(updateUser(values));
    dispatch(setCurrentTab('profile'));
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

Profile.propTypes = {
  handleSubmit: PropsTypes.func.isRequired,
};

export default connect((state) => ({
  initialValues: {
    ...state.user,
    birthday: moment(state.user.birthday).toDate(),
  },
}))(
  reduxForm({
    form: 'profileForm',
    validate,
    asyncValidate,
  })(Profile)
);
