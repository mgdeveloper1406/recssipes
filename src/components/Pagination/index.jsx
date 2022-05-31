import { usePagination, DOTS } from '../../hooks/usePagination'

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
        <li className='pagination__leftArrow' onClick={onPrevious}>
          <button></button>
        </li>
        {paginationRange.map((page, index) => {
          if (page === DOTS) { <li className='pagination__pageNumber--dots'>...</li> }
          return <li key={index} className='pagination__pageNumber' onClick={() => onPageChange(page)}>{page}</li>
        })}
        <li className='pagination__rightArrow' onClick={onNext}>
          <button></button></li>
      </ul>
    </>
  )
};

export default Pagination;