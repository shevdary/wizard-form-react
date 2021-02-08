import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { Field, reduxForm } from 'redux-form';
import { setValueToDB } from 'redux/db/actions';
import { update } from 'redux/user/actions';
import { connect, useDispatch } from 'react-redux';
// components
import Button from 'components/CustomFields/Button';
import SelectedFields from 'components/CustomFields/Option';
import Checkbox from 'components/CustomFields/Inputs/Checkbox';
import TextArea from 'components/CustomFields/Inputs/Text';
// utils
import { HOBBIES, SKILLS } from 'utils/optionsValue';
import { validate } from 'utils/capabilitiesValidate';
// styled
import {
  FormFields,
  Form,
  InputForm,
  Label,
  FormChild,
} from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';
import { setPassedTab } from '../../../redux/tabs/actions';

const Capabilities = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(update(values));
    dispatch(setPassedTab('capabilities'));
    dispatch(setValueToDB());
    history.push('/user-list');
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/contact');
  };

  return (
    <Form className="capabilities" onSubmit={handleSubmit(onSubmit)}>
      <FormChild>
        <FormFields>
          <Field
            label="Skills"
            name="skills"
            type="options"
            options={SKILLS}
            className="fit-content"
            component={SelectedFields}
            isRequired
            isMulti
          />
          <InputForm>
            <Label htmlFor="info">Additional information</Label>
            <Field name="info" component={TextArea} />
          </InputForm>
        </FormFields>
        <FormFields>
          <InputForm>
            <Label htmlFor="hobbies">My hobbies</Label>
            <div className="checked">
              <Field options={HOBBIES} name="hobbies" component={Checkbox} />
            </div>
          </InputForm>
        </FormFields>
      </FormChild>
      <Button type="submit" label=" Finish" name="finish" />
      <Button label="Back" onClick={handleClick} type="button" name="back" />
    </Form>
  );
};
export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'capabilitiesForm',
    validate,
  })(Capabilities)
);
