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
} from './AccountFormStyled';
import { addUserData } from '../../redux/userData/reducers';

// eslint-disable-next-line  import/no-mutable-exports
const AccountForm = () => {
  const [visiblePassword, setVisiblePassword] = useState([true, true]);
  const selector = useSelector((state) => state.form.userData);
  const [type, setType] = useState('password');
  const [repeatType, setRepeatType] = useState('password');
  const [data, setData] = useState(false);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(true);
  };

  useEffect(() => {
    if (data) {
      dispatch(addUserData(selector.values));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const getFile = (e) => {
    console.log('click');
    let reader = new FileReader();
    console.log(e);
    //reader.readAsDataURL(e[0]);
    reader.onload = (e) => {
      setFile(reader.result);
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
            <label htmlFor="username">User name</label>
            <Input name="username" component="input" type="text" />
          </InputForm>
          <InputForm>
            <label htmlFor="password">Password</label>
            <Input name="password" component="input" type={type} />
            <Button onClick={(e) => changeVisinlePassword(e)}>
              {visiblePassword[0] ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </Button>
          </InputForm>
          <InputForm className="password-wraper">
            <label htmlFor="repeatPassword">Repeat password</label>
            <Input name="repeatPassword" component="input" type={repeatType} />
            <Button onClick={(e) => changeVisibleRepeat(e)}>
              {visiblePassword[1] ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </Button>
          </InputForm>
          <ForwardButton type="submit" onClick={(e) => handleSubmit(e)}>
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
