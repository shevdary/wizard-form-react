/*eslint-disable*/
import React from 'react';
import { useSelector } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
// custom components
import { Avatar } from '../Avatar';
import { InputComponent } from '../CustomFields/Input';
// styled
import {
  Form,
  LeftBlock,
  RightBlock,
  UserAvatar,
  ForwardButton,
  AvatarLabel,
} from './AccountFormStyled';
// utils
import { accountDataValidate } from '../../utils/accountValidate';
import { renderField } from '../../utils/reduxValidateField';
import avatar from '../../assets/icon/avatar.svg';

const Index = ({ handleSubmit }) => {
  const { nextStep } = useSelector((state) => state.user);

  if (nextStep && nextStep === '1')
    return <Redirect to="/create-user/profile" />;

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
})(Index);
