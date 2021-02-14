import React, { Component } from 'react';
import { Row } from '../../styled';
import PropsTypes from 'prop-types';
import ColTypeInfo from '../Tab';

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

ColTypeInfo.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.array.isRequired,
};

export default OptionField;
