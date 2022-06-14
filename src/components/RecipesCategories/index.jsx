import { useRef } from 'react';
import RecipeCategoryCard from '../RecipeCategoryCard'
import FilterIcon from '/icons/filter.svg'
import ArrowIcon from '/icons/arrowSmall.svg';
import './styles.scss'

const RecipeCategories = ({ categories }) => {
  const carousel = useRef();

  const scrollLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const scrollRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const categoryCards = categories.map((category) => {
    return (
      <RecipeCategoryCard 
        key={category.id}
        categoryName={category.categoryName}
        cardColor={category.cardColor}
        icon={category.icon}
      />
    )
  })
  return (
    <section className='recipeCategories__container'>
      <div className='recipeCategories__header'>
        <h2 className='recipeCategories__title'>Categories</h2>
        <button className='recipeCategories__filterButton'>
          View All Categories
        </button>
        <button className='recipeCategories__filterButton--mobile' aria-label='Filter categories'>
          <img className='recipeCategories__filterButton__img' src={FilterIcon} />
        </button>
      </div>
      <div className='recipeCategories__carousel'>
        <button className='recipeCategories__carouselArrow recipeCategories__carouselArrow--left' 
          aria-label='Scroll left'
          onClick={scrollLeft}
        >
          <img className='recipeCategories__carouselArrow__icon' src={ArrowIcon} />
        </button>
        <ul className='recipeCategories' ref={carousel}>
          {categoryCards}
        </ul>
        <button className='recipeCategories__carouselArrow recipeCategories__carouselArrow--right'
          aria-label='Scroll right' 
          onClick={scrollRight}
        >
          <img  className='recipeCategories__carouselArrow__icon'src={ArrowIcon} />
        </button>
      </div>
    </section>
  )
}

export default RecipeCategories