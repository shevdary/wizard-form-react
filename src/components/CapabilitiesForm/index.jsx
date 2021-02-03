import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { Field, reduxForm } from 'redux-form';
import { update } from 'redux/user/actions';
import { useDispatch } from 'react-redux';
// components
import { Button } from 'components/CustomFields/Button';
import { SelectedFields } from 'components/CustomFields/Options';
import { Checkbox } from 'components/CustomFields/Checkbox';
import { RenderField } from 'components/CustomFields/RenderField';
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
} from 'components/AccountForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const Capabilities = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(update(values));
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
            component={SelectedFields}
            isRequired
            isMulti
          />
          <InputForm>
            <Label htmlFor="info">Additional information</Label>
            <Field name="info" type="text" component={RenderField} />
          </InputForm>
        </FormFields>
        <FormFields>
          <InputForm>
            <Label htmlFor="hobbies">My hobbies</Label>
            <div className="checked">
              <Field values={HOBBIES} name="hobbies" component={Checkbox} />
            </div>
          </InputForm>
        </FormFields>
      </FormChild>
      <Button type="submit" label=" Finish" name="finish" />
      <Button label="Back" onClick={handleClick} type="button" name="back" />
    </Form>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
  onSubmit: validate,
})(Capabilities);
