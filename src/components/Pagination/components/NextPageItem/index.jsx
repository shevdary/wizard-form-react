import React from 'react';
import img from 'assets/icon/previous.svg';
import startPage from 'assets/icon/startPage.svg';

import { Img, PageLink, PageList } from '../../styled';

const NextPageItem = ({ gotoPage, goToStart, goToEnd, type }) => (
  <>
    {type === 'previous' ? (
      <>
        <PageList>
          <PageLink href="#" aria-label="Previous" onClick={goToStart}>
            <Img src={startPage} alt="" type={type} />
          </PageLink>
        </PageList>
        <PageList>
          <PageLink href="#" aria-label="Previous" onClick={gotoPage}>
            <Img src={img} alt="" type={type} />
          </PageLink>
        </PageList>
      </>
    ) : (
      <>
        <PageList>
          <PageLink href="#" aria-label="Previous" onClick={gotoPage}>
            <Img src={img} alt="" type={type} />
          </PageLink>
        </PageList>
        <PageList>
          <PageLink href="#" aria-label="Previous" onClick={goToEnd}>
            <Img src={startPage} alt="" type={type} />
          </PageLink>
        </PageList>
      </>
    )}
  </>
);

export default NextPageItem;
