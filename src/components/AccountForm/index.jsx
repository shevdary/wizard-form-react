/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
// redux
import { getUser } from 'redux/user/selector';
import { update } from 'redux/user/reducers';
// components
import Button from 'components/Custom/Button';
import { Avatar } from 'components/Avatar';
import { InputComponent } from 'components/Custom/Input';
// styled
import { Form, LeftBlock, RightBlock, UserAvatar, AvatarLabel } from './styled';
// utils
import { renderField } from 'utils/reduxValidateField';
import { validate } from 'utils/accountValidate';
// assets
import avatar from 'assets/icon/avatar.svg';
import { addRouterTab, redirectToNext } from '../../redux/tab/reducers';
import { getTab } from '../../redux/tab/selector';

const AccountForm = () => {
  const { values } = useSelector(getUser);
  const { nextTab, previousTab, tabs } = useSelector(getTab);
  const dispatch = useDispatch();
  const history = useHistory();
  const [next, setNext] = useState();

  useEffect(() => {
    if (next) {
      history.push('/create-user/profile');
    }
  });

  const handleSubmit = () => {
    dispatch(update({ username: values.username, password: values.password }));
    dispatch(redirectToNext());
    setNext(true);
    dispatch(addRouterTab('account'));
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
