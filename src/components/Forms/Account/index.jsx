import React from 'react';
import PropsTypes from 'prop-types';
// store
import { useSelector, connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { userSelector } from 'store/user/selector';
// components
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import InputComponent from 'components/Inputs/InputWrapper';
import RenderField from 'components/Forms/FieldWrapper';
// helpers
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
    <section>
      <Form
        className="account"
        onSubmit={handleSubmit((values) => onSubmit(values, 'profile'))}
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
    </section>
  );
};

AccountForm.propTypes = {
  handleSubmit: PropsTypes.func.isRequired,
  onSubmit: PropsTypes.func.isRequired,
};

export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'accountForm',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    validate,
    asyncValidate,
  })(AccountForm)
);
