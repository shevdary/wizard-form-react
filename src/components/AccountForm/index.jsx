/*eslint-disable*/
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
// custom components
import Button from '../CustomFields/Button';
import { Avatar } from '../Avatar';
import { InputComponent } from '../CustomFields/Input';
// styled
import { Form, LeftBlock, RightBlock, UserAvatar, AvatarLabel } from './styled';
// utils
import { renderField } from '../../utils/reduxValidateField';
import avatar from '../../assets/icon/avatar.svg';
import { validate } from '../../utils/accountValidate';

import {
  addUserData,
  redirectStep,
  redirectToNextStep,
} from '../../redux/user/reducers';

const AccountForm = () => {
  const { nextStep } = useSelector((state) => state.user);
  const { values } = useSelector((state) => state.form.user);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(redirectToNextStep('account'));
    dispatch(redirectStep('1'));
    dispatch(
      addUserData({ username: values.username, password: values.password })
    );
  };
  if (nextStep && nextStep === '1')
    return <Redirect to="/create-user/profile" />;

  return (
    <>
      <Form className="account">
        <LeftBlock className="left-side">
          <UserAvatar className="avatar">
            <img src={avatar} alt="" />
          </UserAvatar>
          <AvatarLabel htmlFor="addAvatar">
            <Avatar id="addAvatar" />
          </AvatarLabel>
        </LeftBlock>
        <RightBlock>
          <InputComponent
            label="User name"
            name="username"
            type="text"
            isRequired
            component={renderField}
          />
          <InputComponent
            label="Password"
            name="password"
            type="password"
            isVisible
            isRequired
            component={renderField}
          />
          <InputComponent
            label="Repeat password"
            name="repeatPassword"
            type="password"
            isVisible
            isRequired
            component={renderField}
          />
          <Button type="submit" onClick={handleSubmit} label="Forward" />
        </RightBlock>
      </Form>
    </>
  );
};

export default reduxForm({
  form: 'user',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AccountForm);
