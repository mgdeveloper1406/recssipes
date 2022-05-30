import { Link } from './Link'

import pagination from '../../utils/pagination';


const Pagination = ({ total, activePave, pageLink, onClick }) => {
  return (
    <>
      <ul className='pagination'>
        {pagination({ total, activePage }).map((page, index) => (
          <li key={index} className='pagination__pageNumber'>
            <Link page={page} onClick={onClick} />
          </li>
        ))}
      </ul>
    </>
  )
};

export default Pagination;