/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
// redux
import { addUserData, redirectToNextStep } from 'redux/user/reducers';
// custom components
import Button from 'components/Custom/Button';
import { Avatar } from '../Avatar';
import { InputComponent } from 'components/Custom/Input';
// styled
import { Form, LeftBlock, RightBlock, UserAvatar, AvatarLabel } from './styled';
// utils
import { renderField } from 'utils/reduxValidateField';
import avatar from 'assets/icon/avatar.svg';
import { validate } from 'utils/accountValidate';


const AccountForm = () => {
  const { values } = useSelector((state) => state.form.steps);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(
      addUserData({ username: values.username, password: values.password })
    );
    dispatch(redirectToNextStep('account'));
    history.push('/create-user/profile');
  };

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
  form: 'steps',
  validate,
  asyncBlurFields: true,
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: false,
})(AccountForm);
