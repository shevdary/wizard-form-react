import React from 'react';
import PropsTypes from 'prop-types';
import { Link, Row } from 'components/UserProfile/styled';

const Field = ({ label, value, textLink }) => (
  <Row>
    <p>{`${label} : `}</p>
    {textLink ? <Link href={value}>{textLink}</Link> : <p>{value}</p>}
  </Row>
);

Field.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.string.isRequired,
  textLink: PropsTypes.string,
};

export default Field;
