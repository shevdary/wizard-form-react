import React from 'react';
import PropsTypes from 'prop-types';
import { Link, Row } from 'components/UserProfile/styled';

const Field = ({ label, value, textLink }) => (
  <Row>
    <span>{`${label} : `}</span>
    {textLink ? <Link href={value}>{textLink}</Link> : <span>{value}</span>}
  </Row>
);

Field.propTypes = {
  label: PropsTypes.string.isRequired,
  value: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.string]).isRequired,
  textLink: PropsTypes.string,
};

export default Field;
