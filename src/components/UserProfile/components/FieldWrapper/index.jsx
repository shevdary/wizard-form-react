import React from 'react';
import PropTypes from 'prop-types';
import { Link, Row } from 'components/UserProfile/styled';

const Field = ({ label, value, textLink }) => (
  <Row>
    <span>{`${label} : `}</span>
    {textLink ? <Link href={value}>{textLink}</Link> : <span>{value}</span>}
  </Row>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  textLink: PropTypes.string,
};

export default Field;
