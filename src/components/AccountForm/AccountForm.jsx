/*eslint-disable*/
import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Avatar } from '../SvgIcon/icon';
import {
  Form,
  Input,
  InputForm,
  LeftBlock,
  RightBlock,
  UserAvatar,
  Button,
  ForwardButton,
  AvatarLabel,
  RequiredField,
  Label,
} from './AccountFormStyled';
import { accountDataValidate } from '../../helpers/accountValidate';
import { renderField } from '../../helpers/reduxValidateField';
import SimpleForm from '../AccountAvatar/AccountAvatar';

const AccountForm = ({ handleSubmit }) => {
  const [visiblePassword, setVisiblePassword] = useState([true, true]);
  const [repeatType, setRepeatType] = useState('password');
  const [type, setType] = useState('password');

  const changeVisiblePassword = (e) => {
    e.preventDefault();
    setVisiblePassword([!visiblePassword[0], visiblePassword[1]]);
    !visiblePassword[0] ? setType('password') : setType('text');
  };

  const changeVisibleRepeat = (e) => {
    e.preventDefault();
    setVisiblePassword([visiblePassword[0], !visiblePassword[1]]);
    !visiblePassword[1] ? setRepeatType('password') : setRepeatType('text');
  };

  return (
    <>
      <Form className="account">
        <LeftBlock className="left-side">
          <UserAvatar className="avatar">{Avatar}</UserAvatar>
          <AvatarLabel htmlFor="addAvatar">
            <SimpleForm id="addAvatar" />
          </AvatarLabel>
        </LeftBlock>
        <RightBlock>
          <InputForm>
            <Label htmlFor="username">
              User name
              <RequiredField>*</RequiredField>
            </Label>
            <Input name="username" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="password">
              Password
              <RequiredField>*</RequiredField>
            </Label>
            <Input name="password" type={type} component={renderField} />
            <Button onClick={changeVisiblePassword}>
              {visiblePassword[0] ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </Button>
          </InputForm>
          <InputForm className="password-wrapper">
            <Label htmlFor="repeatPassword">
              Repeat password
              <RequiredField>*</RequiredField>
            </Label>
            <Input
              name="repeatPassword"
              type={repeatType}
              component={renderField}
            />
            <Button onClick={changeVisibleRepeat}>
              {visiblePassword[1] ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </Button>
          </InputForm>
          <ForwardButton
            type="submit"
            onClick={handleSubmit(accountDataValidate)}
          >
            Forward
          </ForwardButton>
        </RightBlock>
      </Form>
    </>
  );
};

export default reduxForm({
  form: 'userData',
})(AccountForm);
