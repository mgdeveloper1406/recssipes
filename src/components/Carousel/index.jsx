import { useRef } from 'react';

import './styles.scss'

const Carousel = ({ 
  itemsArray, 
  ItemComponent, 
  arrowIcon,
  arrowBackground = 'transparent',
  arrowBackgroundSize = 'small',
  alwaysDisplayArrow = false,
  cardSize = null
}) => {
  const carousel = useRef();

  const scrollLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const scrollRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const items = itemsArray.map((item) => {
    return (
      <ItemComponent
        key={item.id}
        cardSize={cardSize}
        {...item}
      />
    )
  })

  return (
    <div className='carousel'>
      <button 
        className={`
          carousel__arrow${alwaysDisplayArrow ? '--alwaysDisplay' : ''}
          carousel__arrow__background--${arrowBackground}
          carousel__arrow__background--${arrowBackgroundSize}
          carousel__arrow--left
        `}
        aria-label='Scroll left'
        onClick={scrollLeft}
      >
        <img className='carousel__arrow__icon' src={arrowIcon} />
      </button>
      <ul className='carousel__items' ref={carousel}>
        {items}
      </ul>
      <button
        className={`
          carousel__arrow${alwaysDisplayArrow ? '--alwaysDisplay' : ''}
          carousel__arrow__background--${arrowBackground}
          carousel__arrow__background--${arrowBackgroundSize}
          carousel__arrow--right
        `}
        aria-label='Scroll right' 
        onClick={scrollRight}
      >
        <img  className='carousel__arrow__icon' src={arrowIcon} />
      </button>
    </div>
  )
}

export default Carousel