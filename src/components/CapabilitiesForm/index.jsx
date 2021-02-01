import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setValueToDB } from 'redux/db/reducers';
import { setCurrentTab } from 'redux/tabs/reducers';
import { userFormSelector } from 'redux/user/selector';
// components
import { Button } from 'components/CustomFields/Button';
import { SelectedFields } from 'components/CustomFields/Options';
import { Checkbox } from 'components/CustomFields/Checkbox';
import { RenderField } from 'components/CustomFields/RenderField';
// utils
import { hobbies, optionsSkills } from 'utils/optionsValue';
import { validate } from 'utils/capabilitiesValidate';
// styled
import { Form, InputForm, Label } from 'components/AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from 'components/ProfileForm/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { removeItem } from '../../utils/localStorage';

const Capabilities = () => {
  const values = useSelector(userFormSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submit('steps'));
    if (!values.syncErrors) {
      dispatch(setCurrentTab('capabilities'));
      dispatch(setValueToDB());
      removeItem();
      history.push('/user-list');
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
        <Button onClick={handleSubmit} type="finish" label=" Finish" />
      </FlexColumn>
      <Button label="Back" onClick={handleClick} type="back" />
    </>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: validate,
})(Capabilities);
