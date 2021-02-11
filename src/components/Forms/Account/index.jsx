import React from 'react';
import PropsTypes from 'prop-types';
// redux
import { useSelector, connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSelector } from 'redux/user/selector';
// components
import Avatar from 'components/Avatar';
import Button from 'components/CustomFields/Button';
import InputComponent from 'components/CustomFields/Inputs';
import RenderField from 'components/CustomFields/RenderField';
// utils
import { asyncValidate, validate } from 'utils/accountValidate';
// assets
import avatarIcon from 'assets/icon/avatar.svg';
// styled
import {
  Form,
  UserAvatarImage,
  AvatarLabel,
  FormFields,
  FormChild,
} from './styled';

const AccountForm = ({ handleSubmit, onSubmit }) => {
  const { avatar } = useSelector(userSelector);
  return (
    <Form
      className="account"
      onSubmit={handleSubmit((values) =>
        onSubmit(values, 'account', 'profile')
      )}
    >
      <FormChild>
        <FormFields className="left-side">
          <UserAvatarImage
            className="avatar"
            size="170px"
            border="true"
            crop={false}
          >
            <img src={avatar || avatarIcon} alt="avatar" />
          </UserAvatarImage>
          <AvatarLabel htmlFor="addAvatar">
            <Field id="addAvatar" component={Avatar} name="avatar" />
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

AccountForm.propTypes = {
  handleSubmit: PropsTypes.func.isRequired,
  onSubmit: PropsTypes.func.isRequired,
};

export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'accountForm',
    validate,
    asyncValidate,
  })(AccountForm)
);
