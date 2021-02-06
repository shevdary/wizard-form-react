import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { updateUser } from 'redux/user/actions';
import { addValueToDB } from 'redux/db/actions';
import { setCurrentTab } from 'redux/tabs/actions';
import { Field, reduxForm } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
// components
import Button from 'components/CustomFields/Button';
import Checkbox from 'components/CustomFields/Inputs/Checkbox';
import TextArea from 'components/CustomFields/Inputs/Text';
import SelectedFields from 'components/CustomFields/SelectedFields';
// utils
import { validate } from 'utils/capabilitiesValidate';
import { HOBBIES, SKILLS } from 'utils/optionsValue';
// styled
import {
  FormFields,
  Form,
  InputForm,
  Label,
  FormChild,
} from 'components/Forms/Account/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Capabilities = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(updateUser(values));
    dispatch(setCurrentTab('capabilities'));
    dispatch(addValueToDB());
    history.push('/user-list');
  };

  const handleClick = () => {
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
