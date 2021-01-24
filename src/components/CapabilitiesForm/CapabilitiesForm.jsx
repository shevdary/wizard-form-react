import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import {
  BackButton,
  Form,
  InputForm,
  Label,
} from '../AccountForm/AccountFormStyled';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FlexColumn,
  LeftSide,
  RightSide,
} from '../ProfileForm/ProfileFormStyled';
import { SubmitButton, TextArea } from './CapabilitiesFormStyled';

const options = [
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'React', label: 'React' },
  { value: 'Angular', label: 'Angular' },
  { value: 'jQuery', label: 'jQuery' },
  { value: 'NodeJS', label: 'NodeJS' },
  { value: 'Python', label: 'Python' },
  { value: 'PHP', label: 'PHP' },
  { value: 'ROR', label: 'Ruby On Rails' },
  { value: 'SQL', label: 'SQL' },
  { value: 'BackboneJS', label: 'BackboneJS' },
  { value: 'Web Design', label: 'Web Design' },
  { value: 'PM', label: ' Project management' },
  { value: 'Git', label: 'Git' },
  { value: 'Docker', label: 'Docker' },
  { value: 'Lambda', label: 'AWS Lambda' },
  { value: 'Firebase', label: 'Firebase' },
];

const CapabilitiesForm = () => {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleChanges = (e) => {
    const { value } = e.target;
    setCheckedItems([...checkedItems, value]);
  };
  const handleSubmit = () => {};
  return (
    <>
      <form>
        <Form className="account">
          <LeftSide>
            <InputForm>
              <Label htmlFor="company">Company</Label>
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isMulti
              />
            </InputForm>
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
        <SubmitButton type="submit" onClick={handleSubmit}>
          Finish
        </SubmitButton>
        <BackButton
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        >
          Back
        </BackButton>
      </FlexColumn>
    </>
  );
};

export default reduxForm({
  form: 'userCapabilities',
})(CapabilitiesForm);
