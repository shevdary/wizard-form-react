import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, submit } from 'redux-form';
import { useHistory } from 'react-router-dom';
// redux
import { userFormSelector } from 'redux/user/selector';
import { setCurrentTab } from 'redux/tabs/reducers';
// components
import Button from 'components/CustomFields/Button';
import { Avatar } from 'components/Avatar';
import { InputComponent } from 'components/CustomFields/Input';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { asyncValidate, validate } from 'utils/accountValidate';
// assets
import avatar from 'assets/icon/avatar.svg';
// styled
import { Form, LeftBlock, RightBlock, UserAvatar, AvatarLabel } from './styled';

const AccountForm = () => {
  const { values } = useSelector(userFormSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(submit('steps'));
    asyncValidate(values)
      .then(() => {
        dispatch(setCurrentTab('account'));
        history.push('/create-user/profile');
      })
      .catch((error) => console.log(error, 'er'));
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
            component={RenderField}
          />
          <InputComponent
            label="Password"
            name="password"
            type="password"
            isVisible
            isRequired
            component={RenderField}
          />
          <InputComponent
            label="Repeat password"
            name="repeatPassword"
            type="password"
            isVisible
            isRequired
            component={RenderField}
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
  onSubmit: asyncValidate,
})(AccountForm);
