import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setValueToDB } from 'redux/db/reducers';
import { setCurrentTab } from 'redux/tabs/reducers';
import { userFormSelector } from 'redux/user/selector';
// components
import Button from 'components/CustomFields/Button';
import { SelectedFields } from 'components/CustomFields/Options';
import { Checkbox } from 'components/CustomFields/Checkbox';
// utils
import { hobbies, optionsSkills } from 'utils/optionsValue';
import { validate } from 'utils/capabilitiesValidate';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from 'components/ProfileForm/styled';
import { SubmitButton } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import { RenderField } from '../CustomFields/RenderField';

const Capabilities = () => {
  const values = useSelector(userFormSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submit('steps'));
    if (!values.syncErrors) {
      dispatch(setCurrentTab('capabilities'));
      dispatch(setValueToDB());
    }
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
              name="skills"
              type="options"
              options={optionsSkills}
              component={SelectedFields}
              isRequired
              isMulti
            />
            <InputForm>
              <Label htmlFor="info">Additional information</Label>
              <Field name="info" type="text" component={RenderField} />
            </InputForm>
          </LeftSide>
          <RightSide>
            <InputForm>
              <Label htmlFor="hobbies">My hobbies</Label>
              <div className="checked">
                <Field values={hobbies} name="hobbies" component={Checkbox} />
              </div>
            </InputForm>
          </RightSide>
        </Form>
      </form>
      <FlexColumn>
        <SubmitButton onClick={handleSubmit}>Finish</SubmitButton>
        <Button label="Back" onClick={handleClick} />
      </FlexColumn>
    </>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: validate,
})(Capabilities);
