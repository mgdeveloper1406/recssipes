
import { useState } from 'react'
import AdvertisingCard from '../../components/AdvertisingCard'
import ArticlesList from '../../components/ArticlesList'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import TitleAndSearch from '../../components/TitleAndSearch'
import TastyRecipes from '../../components/TastyRecipesSection'

import AdvertisingData from '../../api/AdvertisingData'
import { articles } from '../../api/articles'

import './styles.scss'

const Blog = () => {

  const [filteredArticles, setFilteredArticles] = useState(articles)

  const filterArticles = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredArticles(articles)
    } else {
      const newFilteredArticles = articles.filter((article) => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.userName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredArticles(newFilteredArticles)
    }
  }

  return (
    <div className='blog-page__container'>
      <TitleAndSearch filterArticles={filterArticles} />
      <ArticlesList filteredArticles={filteredArticles}/>
      <AdvertisingCard data={AdvertisingData} />
      <TastyRecipes/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Blog