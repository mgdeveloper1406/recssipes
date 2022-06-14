import React from 'react'
import RecipeCategories from '../../components/RecipesCategories/index.jsx'
import CategoriesData from '../../api/CategoriesData.js'
import './styles.scss'

const Home = () => {
  return (
    <div className='home-page__container'>
      <RecipeCategories categories={CategoriesData} />
    </div>
  )
}

export default Home