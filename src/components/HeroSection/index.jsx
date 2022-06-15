
import React from "react";
import Carousel from "../Carousel";
import HeroCard from "../HeroCard";
import HeroData from "@api/HeroData.js";
import ArrowIcon from "/icons/arrow.svg";



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
				noMargin
			/>
		</section>
	)

}


export default Hero;