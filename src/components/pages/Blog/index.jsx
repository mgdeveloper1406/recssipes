
import { useState } from 'react'
import AdvertisingCard from '@molecules/Cards/Advertising'
import ArticlesList from '@organisms/ArticlesList'
import Footer from '@organisms/Footer'
import Newsletter from '@organisms/Newsletter'
import TitleAndSearch from '@organisms/TitleAndSearch'
import TastyRecipes from '@organisms/TastyRecipes'

import AdvertisingData from '@api/AdvertisingData'
import { articles } from '@api/articles'

import './styles.scss'

const Blog = () => {

  const [articlesData, setArticlesData] = useState(articles)
  const [filtered, setFiltered] = useState(false)

  const filterArticles = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setArticlesData(articles)
      setFiltered(false)
    } else {
      const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.userName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setArticlesData(filteredArticles)
      setFiltered(true)
    }
  }

  return (
    <div className='blogPage'>
      <TitleAndSearch filterArticles={filterArticles} />
      <div className='blogPage__mainContent'>
        <ArticlesList articlesData={articlesData} filtered={filtered} />
        <aside className='blogPage__aside'>
          <AdvertisingCard data={AdvertisingData} />
          <TastyRecipes />
        </aside>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog