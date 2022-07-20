import RecipeHeader from '@organisms/RecipeHeader'
import RecipeNutrition from '@organisms/RecipeNutrition'

import './styles.scss'

const RecipeMainContent = ({ recipeData }) => {
  return (
    <section className='recipeMainContent'>
      <RecipeHeader data={recipeData} />
      <div className='recipeMainContent__foodInfo'>
        <img className='recipeMainContent__image' src={recipeData.image} alt={recipeData.title} />
        <div className='recipeMainContent__nutritionInfo'>
          <RecipeNutrition data={recipeData.nutritionInfo}/>
        </div>
        <p className='recipeMainContent__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  )
}

export default RecipeMainContent