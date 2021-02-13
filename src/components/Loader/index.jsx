import React from 'react';
import PropsTypes from 'prop-types';
// redux
import { useSelector } from 'react-redux';
import { loaderSelector } from 'redux/loader/selectors';
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
  children: PropsTypes.object,
};
export default Loader;
