import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { setCurrentTab } from 'redux/tabs/reducers';
// custom fields
import Button from 'components/CustomFields/Button';
import { InputComponent } from 'components/CustomFields/Input';
import { DataPicker } from 'components/CustomFields/DataPicker';
import { RadioButton } from 'components/CustomFields/RadioButton';
import { PlaceAutocomplete } from 'components/CustomFields/PlaceAutocomplete';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { validate, asyncValidate } from 'utils/profileValidate';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { RadioSelect, FlexColumn, RightSide, LeftSide } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import { userFormSelector } from '../../redux/user/selector';

const Profile = () => {
  const { values } = useSelector(userFormSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/account');
  };

  const handleSubmit = () => {
    dispatch(submit('steps'));
    asyncValidate(values)
      .then(() => {
        dispatch(setCurrentTab('profile'));
        history.push('/create-user/contact');
      })
      .catch((error) => console.log(error, 'er'));
  };

  return (
    <Form className="profile">
      <RightSide>
        <InputComponent
          name="firstName"
          type="text"
          isRequired
          label="First name"
          component={RenderField}
        />
        <InputComponent
          label="Last name"
          name="lastName"
          type="text"
          isRequired
          component={RenderField}
        />
        <InputComponent
          name="birthday"
          dateFormat="dd/MM/yyyy"
          label="Birth date"
          type="date"
          component={DataPicker}
        />
      </RightSide>
      <LeftSide>
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
          type="text"
          values="value"
          component={PlaceAutocomplete}
        />
        <InputForm>
          <Label>Gender</Label>
          <RadioSelect>
            <RadioButton
              name="gender"
              type="radio"
              options={['male', 'female']}
              checked="male"
              component={RenderField}
            />
          </RadioSelect>
        </InputForm>
        <FlexColumn>
          <Button type="submit" onClick={handleSubmit} label="Forward" />
          <Button onClick={handleClick} label="Back" name="backForm" />
        </FlexColumn>
      </LeftSide>
    </Form>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: asyncValidate,
})(Profile);
