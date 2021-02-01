import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, submit, Field } from 'redux-form';
import { useHistory } from 'react-router-dom';
// redux
import { userFormSelector, userSelector } from 'redux/user/selector';
import { setCurrentTab } from 'redux/tabs/reducers';
// components
import { Button } from 'components/CustomFields/Button';
import { Avatar } from 'components/Avatar';
import { InputComponent } from 'components/CustomFields/Input';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { asyncValidate, validate } from 'utils/accountValidate';
// assets
import avatarIcon from 'assets/icon/avatar.svg';
// styled
import { Form, LeftBlock, RightBlock, UserAvatar, AvatarLabel } from './styled';

const AccountForm = () => {
  const { values } = useSelector(userFormSelector);
  const { avatar } = useSelector(userSelector);
  const [isLoadAvatar, setIsLoadAvatar] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (avatar) {
      setIsLoadAvatar(true);
    }
  }, [isLoadAvatar, avatar]);

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
          <UserAvatar
            className="avatar"
            size="170px"
            border="true"
            crop={!isLoadAvatar}
          >
            <img src={avatar || avatarIcon} alt="avatar" />
          </UserAvatar>
          <AvatarLabel htmlFor="addAvatar">
            <Field
              id="addAvatar"
              component={Avatar}
              name="avatar"
              type="file"
            />
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
          <Button type="forward" onClick={handleSubmit} label="Forward" />
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
