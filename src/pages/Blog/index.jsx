
import { useState } from 'react'
import AdvertisingCard from '../../components/AdvertisingCard'
import ArticlesList from '../../components/ArticlesList'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'
import TitleAndSearch from '../../components/TitleAndSearch'
import TastyRecipes from '../../components/TastyRecipes'

import AdvertisingData from '../../api/AdvertisingData'
import { articles } from '../../api/articles'

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
    <div className='blog-page__container'>
      <TitleAndSearch filterArticles={filterArticles} />
      <div className='blog-page__mainContent'>
        <ArticlesList articlesData={articlesData} filtered={filtered} />
        <aside className='blog-page__aside'>
          <AdvertisingCard data={AdvertisingData} />
          <TastyRecipes/>
        </aside>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog