/*eslint-disable*/
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
// utils
import { optionsLanguage, optionsSkills } from 'utils/optionsValue';
// custom components
import Button from '../CustomFields/Button';
// styled
import { Form, InputForm, Label } from '../AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from '../ProfileForm/styled';
import { SubmitButton, TextArea } from './styled';
import 'react-datepicker/dist/react-datepicker.css';
import { SelectedFields } from '../CustomFields/Options';

const Capabilities = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const history = useHistory();

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleChanges = (e) => {
    const { value } = e.target;
    setCheckedItems([...checkedItems, value]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/contact');
  };

  return (
    <>
      <form>
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
                <label htmlFor="hobbies-1">
                  <input
                    className="custom-checkbox"
                    id="hobbies-1"
                    name="hobbies"
                    type="checkbox"
                    value="sport"
                    onChange={handleChanges}
                  />
                  sport
                </label>
                <br />
                <label htmlFor="hobbies-2">
                  <input
                    type="checkbox"
                    id="hobbies-2"
                    value="develop"
                    onChange={handleChanges}
                  />
                  develop
                  <br />
                </label>
                <label htmlFor="hobbies-3">
                  <input
                    type="checkbox"
                    id="hobbies-3"
                    value="art"
                    onChange={handleChanges}
                  />
                  art
                  <br />
                </label>
                <label htmlFor="hobbies-4">
                  <input
                    type="checkbox"
                    id="hobbies-4"
                    value="music "
                    onChange={handleChanges}
                  />
                  music
                  <br />
                </label>
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
  form: 'userCapabilities',
})(Capabilities);
