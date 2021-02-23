import React from 'react';
import PropTypes from 'prop-types';
// store
import { useSelector } from 'react-redux';
import { loaderSelector } from 'store/loader/selectors';
// styled
import { LoaderChild, LoaderWrapper } from './styled';

const Loader = ({ children }) => {
  const { isLoading } = useSelector(loaderSelector);

  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <LoaderChild className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </LoaderChild>
        </LoaderWrapper>
      ) : (
        children
      )}
    </>
  );
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Loader;
