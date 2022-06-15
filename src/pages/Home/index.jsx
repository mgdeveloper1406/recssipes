import React from 'react'
import RecipeCategories from '../../components/RecipeCategories/index.jsx'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-page__container'>
      <RecipeCategories />
    </div>
  )
}

export default Home