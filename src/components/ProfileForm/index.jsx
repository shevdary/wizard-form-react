/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { update } from 'redux/user/reducers';
import { getUser } from 'redux/user/selector';
import { addRouterTab } from 'redux/tab/reducers';
import { getTab } from 'redux/tab/selector';
// custom fields
import Button from 'components/Custom/Button';
import { InputComponent } from 'components/Custom/Input';
import { DataPicker } from 'components/Custom/DataPicker';
import { RadioButton } from 'components/Custom/RadioButton';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { RadioSelect, FlexColumn, RightSide, LeftSide } from './styled';
import { PlaceAutocomplete } from 'components/Custom/PlaceAutocomplete';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import { renderField } from 'utils/reduxValidateField';
import { profileValidate } from 'utils/profileValidate';
import { setPathUnmount } from 'utils/localStorage';

const Index = () => {
  const { values } = useSelector(getUser);
  const { tabs } = useSelector(getTab);

  const [prevTab, setPrevTab] = useState(null);
  const [nextTabs, setNextTab] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (prevTab) {
      history.push('/create-user/account');
    }
    if (nextTabs) {
      history.push('/create-user/contact');
    }
  }, [prevTab, nextTabs]);

  const handleClick = (e) => {
    e.preventDefault();
    setPrevTab(true);
  };

  const handleSubmit = () => {
    dispatch(update(values));
    if (!tabs.includes('profile')) {
      dispatch(addRouterTab('profile'));
    }
    setPathUnmount('contact');
    setNextTab(true);
  };

  return (
    <Form className="profile">
      <LeftSide>
        <InputComponent
          name="firstName"
          type="text"
          isRequired
          label="First name"
          component={renderField}
        />
        <InputComponent
          label="Last name"
          name="lastName"
          type="text"
          isRequired
          component={renderField}
        />
        <Field
          name="birthday"
          dateFormat="dd/MM/yyyy"
          label="Birth date"
          type="date"
          component={DataPicker}
        />
      </LeftSide>
      <RightSide>
        <InputComponent
          label="Email"
          name="email"
          isRequired
          type="email"
          component={renderField}
        />
        <Field
          label="Address"
          name="address"
          type="text"
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
              component={renderField}
            />
          </RadioSelect>
        </InputForm>
        <FlexColumn>
          <Button type="submit" onClick={handleSubmit} label="Forward" />
          <Button onClick={handleClick} label="Back" name="backForm" />
        </FlexColumn>
      </RightSide>
    </Form>
  );
};

export default reduxForm({
  form: 'steps',
  validate: profileValidate,
})(Index);
