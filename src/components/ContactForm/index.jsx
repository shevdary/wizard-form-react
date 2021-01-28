/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// validate fields
import { optionsLanguage } from 'utils/optionsValue';
import { renderField } from 'utils/reduxValidateField';
import { validate } from 'utils/contactValidate';
// custom fields
import { InputComponent } from 'components/Custom/Input';
import { SelectedFields } from 'components/Custom/Options';
import Button from 'components/Custom/Button';
// styled
import { Form, InputForm } from 'components/AccountForm/styled';
import { FlexColumn, LeftSide, RightSide } from 'components/ProfileForm/styled';
import 'react-datepicker/dist/react-datepicker.css';
// utils
import PhoneFields from 'components/PhoneFields';
import {
  addRouterTab,
  redirectToNext,
  redirectToPrevious,
} from '../../redux/tab/reducers';
import { update } from '../../redux/user/reducers';
import { getUser } from '../../redux/user/selector';
import { getTab } from '../../redux/tab/selector';

const ContactForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const values = useSelector(getUser);
  const [prevTab, setPrevTab] = useState(null);
  const [nextTabs, setNextTab] = useState(null);

  useEffect(() => {
    if (prevTab) {
      history.push('/create-user/profile');
    }
    if (nextTabs) {
      history.push('/create-user/capabilities');
    }
  }, [prevTab, nextTabs]);

  const handleClick = (e) => {
    e.preventDefault();
    setPrevTab(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNextTab(true);
    dispatch(update(values.values));
    dispatch(addRouterTab('contact'));
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
            component={renderField}
          />
          <InputComponent
            label="Github link"
            name="githubLink"
            type="text"
            component={renderField}
          />
          <InputComponent
            label="Facebook link"
            name="facebook"
            type="text"
            component={renderField}
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
            component={renderField}
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
