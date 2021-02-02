import React, { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, submit, Field } from 'redux-form';
import { userFormSelector, userSelector } from 'redux/user/selector';
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
import { Form, UserAvatar, AvatarLabel, FormFields } from './styled';

const AccountForm = ({ initialize }) => {
  const valuesFromUserStore = useSelector(userFormSelector);
  const { avatar, username, password, repeatPassword } = useSelector(
    userSelector
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    initialize({ username, password, repeatPassword });
  }, [username, password, repeatPassword, initialize]);

  const handleSubmit = () => {
    const { values } = valuesFromUserStore;
    dispatch(submit('steps'));
    asyncValidate(values)
      .then(() => {
        if (
          !valuesFromUserStore.syncErrors &&
          !valuesFromUserStore.asyncErrors
        ) {
          dispatch(update({ values, history }));
        }
      })
      .catch(() => {});
  };

  return (
    <>
      <Form className="account">
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
      </Form>
      <Button type="forward" onClick={handleSubmit} label="Forward" />
    </>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: asyncValidate,
})(AccountForm);
