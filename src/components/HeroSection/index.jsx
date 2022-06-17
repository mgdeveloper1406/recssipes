
import React from "react";
import Carousel from "../Carousel";
import HeroCard from "../HeroCard";
import HeroData from "@api/HeroData.js";
import ArrowIcon from "/icons/arrowSmall.svg";

import './styles.scss'

function Hero() {

	return (
		<section className='hero'>
			<Carousel
				itemsArray={HeroData}
				ItemComponent={HeroCard}
				arrowIcon={ArrowIcon}
				arrowBackground='white'
				arrowBackgroundSize='medium'
				alwaysDisplayArrow				
			/>
		</section>
	)

}


export default Hero;