import React from 'react';
import { Row } from 'components/UserProfile/styled';
import PropsTypes from 'prop-types';

const OptionField = ({ label, value }) => {
  return (
    <Row>
      <p>{label}</p>
      <p>
        {value
          .map((item) => item)
          .map((item) => item.label)
          .join(', ')}
      </p>
    </Row>
  );
};

OptionField.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.array.isRequired,
};

export default OptionField;
