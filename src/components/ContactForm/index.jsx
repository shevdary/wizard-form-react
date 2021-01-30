import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// redux
import { setCurrentTab } from 'redux/tabs/reducers';

// components
import { InputComponent } from 'components/CustomFields/Input';
import { SelectedFields } from 'components/CustomFields/Options';
import Button from 'components/CustomFields/Button';
import PhoneFields from 'components/PhoneFields';
import { RenderField } from 'components/CustomFields/RenderField';
// validate fields
import { optionsLanguage } from 'utils/optionsValue';
import { validate } from 'utils/contactValidate';
// styled
import { Form, InputForm } from 'components/AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from 'components/ProfileForm/styled';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/create-user/profile');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentTab('contact'));
    history.push('/create-user/capabilities');
  };

  return (
    <form className="contact">
      <Form>
        <LeftSide>
          <InputComponent
            label="Company"
            isRequired
            name="company"
            type="text"
            component={RenderField}
          />
          <InputComponent
            label="Github link"
            name="githubLink"
            type="text"
            component={RenderField}
          />
          <InputComponent
            label="Facebook link"
            name="facebook"
            type="text"
            component={RenderField}
          />
          <Field
            label="Main language"
            name="language"
            type="options"
            isRequired
            options={optionsLanguage}
            component={SelectedFields}
          />
        </LeftSide>
        <RightSide>
          <InputComponent
            label="Fax"
            name="fax"
            type="text"
            component={RenderField}
          />
          <InputForm>
            <PhoneFields />
          </InputForm>
          <FlexColumn>
            <Button type="submit" onClick={handleSubmit} label="Forward" />
            <Button name="backForm" label="Back" onClick={handleClick} />
          </FlexColumn>
        </RightSide>
      </Form>
    </form>
  );
};

export default reduxForm({
  form: 'steps',
  validate,
})(ContactForm);
