import React from 'react';
// styled
import { PageLink, PageList } from 'components/Pagination/styled';

const PageItem = ({ currentPage, gotoPage, pages, rangePage }) =>
  pages.map(
    (page, index) =>
      rangePage(currentPage).includes(page) && (
        <PageList key={index} className={currentPage === page ? 'active' : ''}>
          <PageLink
            href="#"
            aria-label="Previous"
            onClick={() => gotoPage(page)}
          >
            {page}
          </PageLink>
        </PageList>
      )
  );

export default PageItem;
