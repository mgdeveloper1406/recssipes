import RecipeCategoryCard from '../RecipeCategoryCard'
import FilterIcon from '/icons/filter.svg'
import ArrowIcon from '/icons/arrowSmall.svg';
import CategoriesData from '@api/CategoriesData.js'
import Carousel from '../Carousel';

import './styles.scss'

const RecipeCategories = () => {

  return (
    <section className='recipeCategories'>
      <div className='recipeCategories__header'>
        <h2 className='recipeCategories__title'>Categories</h2>
        <button className='recipeCategories__filterButton'>
          View All Categories
        </button>
        <button className='recipeCategories__filterButton--mobile' aria-label='Filter categories'>
          <img className='recipeCategories__filterButton__img' src={FilterIcon} />
        </button>
      </div>
      <Carousel
        itemsArray={CategoriesData}
        ItemComponent={RecipeCategoryCard}
        arrowIcon={ArrowIcon}
        arrowBackground='lightBlue'
      />
    </section>
  )
}

export default RecipeCategories