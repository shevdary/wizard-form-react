import React, { useState } from 'react';
import { Field } from 'redux-form';
// components
import { AddNumber } from 'components/ContactForm/styled';
import { Label } from 'components/AccountForm/styled';
import { renderNumber } from 'components/CustomFields/PhoneNumber';

const PhoneFields = () => {
  const [values, setValues] = useState([]);

  const addClick = (e) => {
    e.preventDefault();
    const generateId = new Date().getTime().toString();
    setValues([...values, { id: generateId, values: null }]);
  };

  const removeClick = (id) => {
    const val = values.filter((item) => item.id !== id);
    setValues(val);
  };

  return (
    <div>
      {values.map((element, index, array) => (
        <div key={element.id}>
          <Label htmlFor={`${index}-number`}>{`number #${index} `}</Label>
          <Field
            name={`number${index}`}
            id={`${index}-number`}
            component={renderNumber}
          />

          {array.length > 1 ? (
            <AddNumber type="button" onClick={() => removeClick(element.id)}>
              -
            </AddNumber>
          ) : null}
        </div>
      ))}
      {values.length < 3 && (
        <AddNumber onClick={addClick} component="button">
          + add phone number
        </AddNumber>
      )}
    </div>
  );
};

export default PhoneFields;
