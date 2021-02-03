import React from 'react';
// redux
import { useDispatch, useSelector, connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSelector } from 'redux/user/selector';
import { update } from 'redux/user/reducers';
// components
import { Button } from 'components/CustomFields/Button';
import { Avatar } from 'components/Avatar';
import { InputComponent } from 'components/CustomFields/Input';
import { RenderField } from 'components/CustomFields/RenderField';
import { useHistory } from 'react-router-dom';
// utils
import { asyncValidate, validate } from 'utils/accountValidate';
// assets
import avatarIcon from 'assets/icon/avatar.svg';
// styled
import { Form, UserAvatar, AvatarLabel, FormFields, FormChild } from './styled';

const AccountForm = ({ handleSubmit }) => {
  const { avatar } = useSelector(userSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values) => {
    dispatch(update(values));
    history.push('/create-user/profile');
  };

  return (
    <Form className="account" onSubmit={handleSubmit(onSubmit)}>
      <FormChild>
        <FormFields className="left-side">
          <UserAvatar
            className="avatar"
            size="170px"
            border="true"
            crop={false}
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
        </FormFields>
        <FormFields big>
          <InputComponent
            label="User name"
            name="username"
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
        </FormFields>
      </FormChild>
      <Button type="submit" label="Forward" name="forward" />
    </Form>
  );
};

export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'accountForm',
    validate,
    asyncValidate,
  })(AccountForm)
);
