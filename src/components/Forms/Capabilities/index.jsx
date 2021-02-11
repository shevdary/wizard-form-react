import React from 'react';
// redux
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// components
import Button from 'components/CustomFields/Button';
import Checkbox from 'components/CustomFields/Inputs/Checkbox';
import TextArea from 'components/CustomFields/Inputs/Text';
import SelectedFields from 'components/CustomFields/Selected';
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

const Capabilities = ({ handleSubmit, onSubmit, goBack }) => (
  <Form
    className="capabilities"
    onSubmit={handleSubmit((values) => onSubmit(values, '/user-list'))}
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
            <Field options={HOBBIES} name="hobbies" component={Checkbox} />
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
