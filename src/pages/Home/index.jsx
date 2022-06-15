import React from 'react'
import RecipeCategories from '../../components/RecipeCategories/index.jsx'
import LearnMore from '../../components/LearnMore'
import './styles.scss'

const Home = () => {
  return (
    <div className='home-page__container'>
      <RecipeCategories />
      <LearnMore />
    </div>
  )
}

export default Home