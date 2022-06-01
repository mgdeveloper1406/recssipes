import { usePagination, DOTS } from '../../hooks/usePagination';

import './index.scss';

const Pagination = ({
  totalCount,
  pageSize,
  siblingCount = 0,
  currentPage,
  onPageChange
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <ul className='pagination'>
        <li
          className='pagination__item pagination__leftArrow'
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          <button className='pagination__itemButton' disabled={currentPage === 1} >previous</button>
        </li>
        {paginationRange.map((page, index) => {
          if (page === DOTS) {
            return (
              <li
                className='pagination__item '
                disabled={true}
                key={DOTS + index}
              ><button className='pagination__itemButton pagination__pageNumber--dots' disabled={true}>{DOTS}</button></li>
            )
          }
          return (
            <li
              key={index}
              className={`pagination__item ${currentPage === page ? '--active' : ''} pagination__pageNumber `}
              onClick={() => onPageChange(page)}
            >
              {page}
            </li>
          )
        })}
        <li
          className='pagination__item pagination__rightArrow'
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          <button className='pagination__itemButton' disabled={currentPage === lastPage}>next</button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;