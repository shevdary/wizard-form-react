import React from 'react';
// redux
import { Field } from 'redux-form';
// components
import {
  ButtonForPhone,
  ButtonWrapper,
  FieldWrapper,
} from 'components/ContactForm/styled';
import { renderNumber } from 'components/CustomFields/PhoneNumber';
// assets
import addNumberIcon from 'assets/icon/addButton.svg';
import removeNumberIcon from 'assets/icon/removeButton.svg';

export const PhoneFields = ({ fields, maxCountFiled }) => {
  const handleCreatePhone = () => {
    fields.push({});
  };
  const handleRemovePhone = (index) => {
    fields.remove(index);
  };

  return (
    <div className="phoneFields">
      {fields.map((phone, index) => (
        <FieldWrapper key={`phones${index}`}>
          <Field name={`phones.${index}`} id={index} component={renderNumber} />
          <ButtonWrapper>
            <ButtonForPhone
              type="button"
              onClick={() => handleRemovePhone(index)}
              count={fields.length}
            >
              <img src={removeNumberIcon} alt="remove" />
            </ButtonForPhone>
          </ButtonWrapper>
        </FieldWrapper>
      ))}
      {fields.length < maxCountFiled && (
        <ButtonForPhone
          type="button"
          component="button"
          onClick={handleCreatePhone}
        >
          <img src={addNumberIcon} alt="add" />
          add phone number
        </ButtonForPhone>
      )}
    </div>
  );
};
