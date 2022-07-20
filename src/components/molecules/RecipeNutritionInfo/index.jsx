import './styles.scss'

const RecipeNutritionInfo = ({ data }) => {
  const nutritionInfo = Object.entries(data).map((item) => {
    return (
      <li key={item[0]} className='recipeNutritionInfo__item'>
        <span className='recipeNutritionInfo__itemName'>{item[0].split(/(?=[A-Z])/).join(" ")}</span>
        <span className='recipeNutritionInfo__itemValue'>{item[1]}</span>
      </li>
    )
  })

  return (
    <div className='recipeNutritionInfo'>
      <div className='recipeNutritionInfo__mainContent'>
        <h3 className='recipeNutritionInfo__title'>Nutrition Information</h3>
        <ul className='recipeNutritionInfo__items'>
          {nutritionInfo}
        </ul>
      </div>
      <p className='recipeNutritionInfo__footer'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

export default RecipeNutritionInfo