import React from 'react';
// store
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// components
import Button from 'components/Button';
import Checkbox from 'components/FormFields/Inputs/Checkbox';
import TextArea from 'components/FormFields/Inputs/Text';
import SelectedFields from 'components/FormFields/Selected';
// helpers
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

const Capabilities = ({ handleSubmit, onSubmit, goBack }) => (
  <Form
    className="capabilities"
    onSubmit={handleSubmit((values) => onSubmit(values))}
  >
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
            <Field name="hobbies" component={Checkbox} options={HOBBIES} />
          </div>
        </InputForm>
      </FormFields>
    </FormChild>
    <Button type="submit" label=" Finish" name="finish" />
    <Button
      label="Back"
      onClick={() => goBack('contact')}
      type="button"
      name="back"
    />
  </Form>
);

export default connect((state) => ({ initialValues: state.user }))(
  reduxForm({
    form: 'capabilitiesForm',
    enableReinitialize: true,
    validate,
  })(Capabilities)
);
