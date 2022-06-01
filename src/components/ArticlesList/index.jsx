import { useEffect, useMemo, useState } from 'react';
import { articles } from '../../api/articles';
import Pagination from '../Pagination';
import ArticleItem from './ArticleItem';
import usePageWidth from '../../hooks/usePageWidth'

import './index.css'

const ArticlesList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const windowWidth = usePageWidth()
  const pageSize = windowWidth <= 420 ? 3 : 6

  // test
  // console.log('pageSize', pageSize)
  // console.log('width', windowWidth)

  const currentList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  return (
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
        totalCount={articles.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default ArticlesList;