/*eslint-disable*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
// redux
import { getUser } from 'redux/user/selector';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/user/reducers';
import { setValueToDB } from 'redux/db/reducers';
// components
import Button from 'components/Custom/Button';
import { SelectedFields } from 'components/Custom/Options';
import { Checkbox } from 'components/Custom/Checkbox';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from 'components/ProfileForm/styled';
import { SubmitButton, TextArea } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import { hobbies, optionsSkills } from 'utils/optionsValue';

const Capabilities = () => {
  const values = useSelector(getUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setValueToDB());
    dispatch(update(values.values));
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/contact');
  };

  return (
    <>
      <form className="capabilities">
        <Form className="account">
          <LeftSide>
            <Field
              label="Skills"
              name="skill"
              type="options"
              options={optionsSkills}
              component={SelectedFields}
              isRequired
              isMulti
            />
            <InputForm>
              <Label htmlFor="info">Additional information</Label>
              <TextArea name="info" type="text" component="input" />
            </InputForm>
          </LeftSide>
          <RightSide>
            <InputForm>
              <Label htmlFor="hobbies">My hobbies</Label>
              <div className="checked">
                <Checkbox values={hobbies} />
              </div>
            </InputForm>
          </RightSide>
        </Form>
      </form>
      <FlexColumn>
        <SubmitButton onClick={handleSubmit}>Finish</SubmitButton>{' '}
        <Button label="Back" onClick={handleClick} />
      </FlexColumn>
    </>
  );
};

export default reduxForm({
  form: 'steps',
})(Capabilities);
