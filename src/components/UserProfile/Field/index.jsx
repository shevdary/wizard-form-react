import React from 'react';
import PropsTypes from 'prop-types';
import { Row } from '../styled';

const Field = ({ label, value }) => (
  <Row>
    <p>{`${label} : `}</p>
    <p>{value}</p>
  </Row>
);

Field.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
};

export default Field;
