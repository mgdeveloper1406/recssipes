import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton';
import TimerIcon from '/icons/timer.svg';
import ForkKnifeIcon from '/icons/forkKnife.svg';

import './styles.scss'

const RecipeCard = ({ image, title, tag1, tag2, cardSize }) => {

  return (
      <li className='recipe-card__container'>
      <Link to='/recipes' className='recipe-card__link'>
        <div className='recipe-card'>
          <img className='recipe-card__img' src={image} alt={title} />
          <LikeButton />
          <h3 className={`recipe-card__title recipe-card__title--${cardSize}`}>{title}</h3>
          <div className='recipe-card__tags'>
            <span className='recipe-card__tag1'>
              <img
                src={TimerIcon}
                alt='Duration'
                className='recipe-card__tag1__icon'
              />
              {tag1}
            </span>
            <span className='recipe-card__tag2'>
              <img
                src={ForkKnifeIcon}
                alt='Type'
                className='recipe-card__tag2__icon'
              />
              {tag2}
            </span>
          </div>
        </div>
      </Link>
      </li>
  );
};

export default RecipeCard;