import React from 'react';
import PropsTypes from 'prop-types';
// redux
import { Field } from 'redux-form';
// components
import { ButtonWrapper, FieldWrapper } from 'components/Forms/Contact/styled';
import Phone from 'components/FormFields/Inputs/Phone';
import Button from '../Buttons';

const PhoneFields = ({ fields, maxCountFiled }) => (
  <div className="phoneFields">
    {fields.map((hobby, index) => (
      <FieldWrapper key={index}>
        <Field
          name={hobby}
          type="text"
          component={Phone}
          label={`Phone #${index + 1}`}
        />
        <ButtonWrapper>
          <Button
            name="remove"
            onClick={() => fields.remove(index)}
            count={fields.length}
          />
        </ButtonWrapper>
      </FieldWrapper>
    ))}
    {fields.length < maxCountFiled && (
      <Button
        name="add"
        component="button"
        onClick={() => fields.push()}
        label="add phone number"
      />
    )}
  </div>
);

PhoneFields.propTypes = {
  fields: PropsTypes.object.isRequired,
  maxCountFiled: PropsTypes.number,
};
export default PhoneFields;
