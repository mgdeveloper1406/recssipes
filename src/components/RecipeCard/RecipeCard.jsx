import { Link } from 'react-router-dom';

import LikeButton from '../LikeButton/LikeButton';
import TimerIcon from '/icons/timer.svg';
import ForkKnifeIcon from '/icons/forkKnife.svg';

import './recipeCard.css';

// id will be used in the route path
const RecipeCard = ({ id, image, title, tag1, tag2 }) => {

  return (
      <Link to='/recipes' className='recipe-card__link'>
        <div className='recipe-card'>
          <img className='recipe-card__img' src={image} alt={title} />
          <LikeButton />
          <h3 className='recipe-card__title'>{title}</h3>
          <div className='recipe-card__tags'>
            <span className='recipe-card__tag1'>
              <img
                src={TimerIcon}
                alt='Timer'
                className='recipe-card__tag1__icon'
              />
              {tag1}
            </span>
            <span className='recipe-card__tag2'>
              <img
                src={ForkKnifeIcon}
                alt='Fork and knife'
                className='recipe-card__tag2__icon'
              />
              {tag2}
            </span>
          </div>
        </div>
      </Link>
  );
};

export default RecipeCard;