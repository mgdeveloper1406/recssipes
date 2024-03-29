import RecipeNutritionItem from '@molecules/RecipeNutritionItem'

import './styles.scss'

const RecipeNutrition = ({ data }) => {
  const nutritionInfo = Object.entries(data).map((item) => {
    return (
      <RecipeNutritionItem key={item[0]} itemData={item} />
    )
  })

  return (
    <div className='recipeNutrition'>
      <div className='recipeNutrition__mainContent'>
        <h3 className='recipeNutrition__title'>Nutrition Information</h3>
        <ul className='recipeNutrition__items'>
          {nutritionInfo}
        </ul>
      </div>
      <p className='recipeNutrition__footer'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

export default RecipeNutrition