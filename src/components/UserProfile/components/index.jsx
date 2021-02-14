import React from 'react';
import PropsTypes from 'prop-types';
import { Row } from '../styled';

const Field = ({ label, value, type = 'text', textLink }) => (
  <Row>
    <p>{`${label} : `}</p>
    {type === 'link' ? <a href={value}>{textLink}</a> : <p>{value}</p>}
  </Row>
);

Field.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  type: PropsTypes.string,
  textLink: PropsTypes.string,
};

export default Field;
