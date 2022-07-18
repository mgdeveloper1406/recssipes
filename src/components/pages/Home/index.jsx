import LearnMore from '@organisms/LearnMore'
import Newsletter from '@organisms/Newsletter'
import RecipeCategories from '@organisms/RecipeCategories'
import SimpleTastyRecipes from '@organisms/SimpleTastyRecipes'
import TryOutRecipes from '@organisms/TryOutRecipes'
import InstagramSection from '@organisms/InstagramSection'
import Hero from '@organisms/HeroSection'

import SimpleTastyRecipesData from '@api/SimpleTastyRecipes.js'
import TryOutRecipesData from '@api/TryOutRecipes.js'
import instagramData from '@api/intagramData.js';

import './styles.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <Hero/>
      <RecipeCategories />
      <SimpleTastyRecipes recipes={SimpleTastyRecipesData} />
      <LearnMore />
      <InstagramSection posts={instagramData} />
      <TryOutRecipes recipes={TryOutRecipesData} />
      <Newsletter />
    </div>
  )
}

export default Home