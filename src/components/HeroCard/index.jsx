import React from "react";
import Timer from 'icons/timer.svg';
import Fork from 'icons/forkKnive.svg';
import Badge from 'imgs/Badge.png';
import Chicken from 'imgs/baked-chicken.png';
import Category from 'imgs/category.png';
import AutorInfo from 'imgs/autor-info.png';

const itenscard = [
  {
    category: {Category},
    title: 'Spicy delicious chicken wings',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse quae at quia vel voluptas possimus deserunt, dolorum minima! Laudantium sed expedita maiores est similique voluptas adipisci officia obcaecati!',
    timerimage: {Timer},
    time:'30 minutes',
    forkimage:{Fork},
    namefood: 'Chicken',
    author: {AutorInfo},
    selo: {Badge},
    image: {Chicken}
  },

  {
    category: {Category},
    title: 'Spicy delicious chicken wings',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse quae at quia vel voluptas possimus deserunt, dolorum minima! Laudantium sed expedita maiores est similique voluptas adipisci officia obcaecati!',
    timerimage: {Timer},
    time:'30 minutes',
    forkimage:{Fork},
    namefood: 'Chicken',
    author: {AutorInfo},
    selo: {Badge},
    image: {Chicken}
  },

  {
    category: {Category},
    title: 'Spicy delicious chicken wings',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio esse quae at quia vel voluptas possimus deserunt, dolorum minima! Laudantium sed expedita maiores est similique voluptas adipisci officia obcaecati!',
    timerimage: {Timer},
    time:'30 minutes',
    forkimage:{Fork},
    namefood: 'Chicken',
    author: {AutorInfo},
    selo: {Badge},
    image: {Chicken}
  }
]

function HeroCard() {
	
	return (
		<div className="heroCard__container">
			<ul className="heroCard__list">
				{
					itenscard.map(item => (
						<li className="list__item">
							{item.category}
							{item.title}
              {item.description}
              {item.timerimage}
              {item.time}
              {item.forkimage}
              {item.namefood}
              {item.author}
              {item.selo}
              {item.image}
						</li>
					))
				}

			</ul>

			
		</div>
	)
   
}


export default HeroCard;