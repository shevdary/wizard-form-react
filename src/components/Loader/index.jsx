import React from 'react';
import { BeatLoader } from 'react-spinners';
// redux
import { useSelector } from 'react-redux';
import { loaderSelector } from 'redux/loader/selectors';
// styled
import { LoaderWrapper } from './styled';

const Loader = ({ children }) => {
  const { isLoading } = useSelector(loaderSelector);
  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <BeatLoader color="#4E86E4" size={15} margin={2} loading="true" />
        </LoaderWrapper>
      )}
      {!isLoading && children}
    </>
  );
};
export default Loader;
