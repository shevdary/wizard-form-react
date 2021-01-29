/*eslint-disable*/
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
// utils
import { hobbies, optionsSkills } from 'utils/optionsValue';
// components
import Button from 'components/Custom/Button';
import { SelectedFields } from 'components/Custom/Options';
import { Checkbox } from 'components/Custom/Checkbox';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from 'components/ProfileForm/styled';
import { SubmitButton, TextArea } from './styled';
import 'react-datepicker/dist/react-datepicker.css';

const Capabilities = () => {
  const history = useHistory();

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
        <SubmitButton type="submit">Finish</SubmitButton>
        <Button label="Back" onClick={handleClick} />
      </FlexColumn>
    </>
  );
};

export default reduxForm({
  form: 'steps',
})(Capabilities);
