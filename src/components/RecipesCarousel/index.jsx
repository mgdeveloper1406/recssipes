import { useRef } from 'react';
import ArrowIcon from '/icons/arrow.svg';
import RecipeCard from '../RecipeCard';
import './styles.scss'
import '../LikeButton';

const RecipesCarousel = ({ items }) => {
  const carousel = useRef();

  const recipes = items.map((item) => {
    return (
      <li className='recipeCard__container--small' key={item.id}>
        <RecipeCard
          image={item.image}
          title={item.title}
          tag1={item.tag1}
          tag2={item.tag2}
          cardSize='small'
        />
      </li>
    );
  });

  const scrollLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const scrollRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section className='recipes__container'>
      <h2 className='recipes__title'>Check out these delicious recipes</h2>
      <div className='recipes__carousel'>
        <button className='recipes__carousel__arrow recipes__carousel__arrow--left' onClick={scrollLeft}>
          <img src={ArrowIcon} alt='Scroll left' />
        </button>
        <ul className='recipes' ref={carousel}>
          {recipes}
        </ul>
        <button className='recipes__carousel__arrow recipes__carousel__arrow--right' onClick={scrollRight}>
          <img src={ArrowIcon} alt='Scroll right' />
        </button>
      </div>
    </section>
  );
};

export default RecipesCarousel;
