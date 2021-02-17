import React from 'react';
import { PageLink, PageList } from 'components/Pagination/styled';

const PageItem = ({ currentPage, gotoPage, pages, pageRange }) =>
  pages.map((page, index) => (
    <>
      {pageRange.includes(page) && (
        <PageList key={index} className={currentPage === page ? 'active' : ''}>
          <PageLink
            href="#"
            aria-label="Previous"
            onClick={() => gotoPage(page)}
          >
            {page}
          </PageLink>
        </PageList>
      )}
    </>
  ));

export default PageItem;
