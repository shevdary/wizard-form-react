import React from 'react';
import PropsTypes from 'prop-types';
// styled
import { ErrorTitle, ErrorWrapper } from './styled';

const NotFound = ({ title }) => (
  <ErrorWrapper>
    <ErrorTitle>{`404 ${title || 'Page not found'}`}</ErrorTitle>
  </ErrorWrapper>
);

NotFound.propTypes = {
  title: PropsTypes.string,
};

export default NotFound;
