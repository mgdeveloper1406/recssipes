import { useMemo, useState } from 'react';
import Pagination from '../Pagination';
import ArticleItem from './ArticleItem';
import usePageWidth from '../../hooks/usePageWidth'

import './index.scss'

const ArticlesList = ({ filteredArticles }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const windowWidth = usePageWidth()
  const pageSize = windowWidth <= 600 ? 3 : 6

  const currentList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredArticles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, filteredArticles]);

  return (
    <div className='articleListContainer'>
      {currentList.length > 0 ? ( 
        <>
          <ul className='articleList'>
            {currentList.map(article => {
              return (
                <ArticleItem
                  key={article.id}
                  id={article.id}
                  image={article.image}
                  title={article.title}
                  description={article.description}
                  userImage={article.userImage}
                  userName={article.userName}
                  plublishedAt={article.publishedAt}
                />
              )
            })}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalCount={filteredArticles.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </>)
      : <p className='articlesList--empty'>No results found.</p>}
    </div>
  );
};

export default ArticlesList;