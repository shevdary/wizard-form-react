import React from 'react';
import PropsTypes from 'prop-types';
import { Row } from 'components/UserProfile/styled';

const LinkField = ({ label, value, textLink }) => (
  <Row>
    <p>{`${label} : `}</p>
    <a href={value}>{textLink}</a>
  </Row>
);

LinkField.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  textLink: PropsTypes.string.isRequired,
};
export default LinkField;
