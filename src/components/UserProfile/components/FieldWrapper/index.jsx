import React from 'react';
import PropTypes from 'prop-types';
import { Link, Row } from 'components/UserProfile/styled';

const Field = ({ label, value, textLink }) => (
  <Row>
    <p>{`${label} : `}</p>
    {textLink ? <Link href={value}>{textLink}</Link> : <p>{value}</p>}
  </Row>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  textLink: PropTypes.string,
};

export default Field;
