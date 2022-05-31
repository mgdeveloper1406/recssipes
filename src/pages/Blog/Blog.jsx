import React from 'react'
import ArticlesList from '../../components/ArticlesList';
import "./blog.css";

const Blog = () => {
  return (
    <>
      <div className='blogPage'>
        <ArticlesList />
      </div>
    </>
  )
}

export default Blog