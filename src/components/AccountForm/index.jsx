/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Redirect, useHistory } from 'react-router-dom';
// redux
import { getUser } from 'redux/user/selector';
import { update } from 'redux/user/reducers';
import { addRouterTab } from 'redux/tab/reducers';
import { getTab } from 'redux/tab/selector';
// components
import Button from 'components/Custom/Button';
import { Avatar } from 'components/Avatar';
import { InputComponent } from 'components/Custom/Input';
// styled
import { Form, LeftBlock, RightBlock, UserAvatar, AvatarLabel } from './styled';
// utils
import { renderField } from 'components/Custom/renderField';
import { asyncValidate, validate } from 'utils/accountValidate';
import { setPathUnmount } from 'utils/localStorage';
// assets
import avatar from 'assets/icon/avatar.svg';

const AccountForm = () => {
  const { values } = useSelector(getUser);
  const { tabs } = useSelector(getTab);
  const [next, setNext] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (next) {
      history.push('/create-user/profile');
    }
  }, [next]);

  const handleSubmit = () => {
    dispatch(update({ username: values.username, password: values.password }));
    setNext(true);
    if (!tabs.includes('account')) {
      dispatch(addRouterTab('account'));
    }
    setPathUnmount('profile');
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
  asyncValidate,
})(AccountForm);
