/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
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
  AddAvatar,
  AvatarLabel,
  RequiredField,
  Label,
  Inputs,
} from './AccountFormStyled';
import { addUserData } from '../../redux/userData/reducers';
import { validate } from '../../helpers/accountValidate';

const renderField = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = props;
  console.log(props);
  return (
    <InputForm>
      <Label> {label}</Label>
      <div>
        <Inputs {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </InputForm>
  );
};

const AccountForm = ({ handleSubmit }) => {
  const [visiblePassword, setVisiblePassword] = useState([true, true]);
  const [type, setType] = useState('password');
  const [repeatType, setRepeatType] = useState('password');
  const [data, setData] = useState(false);
  const [file, setFile] = useState(null);

  const selector = useSelector((state) => state.form.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addUserData(selector.values));
    }
  }, [data]);

  const getFile = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e[0]);
    reader.onload = (e) => {
      setFile({ file: reader.result, size: e.loaded });
    };
  };

  const changeVisinlePassword = (e) => {
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
    <Form className="account">
      <LeftBlock className="left-side">
        <UserAvatar className="avatar">{Avatar}</UserAvatar>
        <AvatarLabel htmlFor="addAvatar">
          <AddAvatar
            type="file"
            multiple
            onChange={(e) => getFile(e.target.files)}
            id="addAvatar"
          />
          <i />+ addAvatar
        </AvatarLabel>
      </LeftBlock>
      <RightBlock>
        <form>
          <InputForm>
            <Label htmlFor="username">
              User name <RequiredField>*</RequiredField>
            </Label>
            <Input name="username" type="text" component={renderField} />
          </InputForm>
          <InputForm>
            <Label htmlFor="password">
              Password <RequiredField>*</RequiredField>
            </Label>
            <Input name="password" type={type} component={renderField} />
            <Button onClick={(e) => changeVisinlePassword(e)}>
              {visiblePassword[0] ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </Button>
          </InputForm>
          <InputForm className="password-wraper">
            <Label htmlFor="repeatPassword">
              Repeat password <RequiredField>*</RequiredField>
            </Label>
            <Input
              name="repeatPassword"
              type={repeatType}
              component={renderField}
            />
            <Button onClick={(e) => changeVisibleRepeat(e)}>
              {visiblePassword[1] ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </Button>
          </InputForm>
          <ForwardButton type="submit" onClick={handleSubmit(validate)}>
            Forward
          </ForwardButton>
        </form>
      </RightBlock>
    </Form>
  );
};

export default reduxForm({
  form: 'userData',
})(AccountForm);
