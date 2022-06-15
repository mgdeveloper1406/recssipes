import Carousel from '@components/Carousel'
import InstagramCard from '@components/InstagramCard';

import instagramData from '@api/intagramData';
import ArrowIcon from "/icons/arrow.svg";
import './styles.css'

const IntagramSection = () => {
  return (
    <section>
      <h2>Check out @foodieland on <a href="www.instagram.com/foofieland">Instagram</a></h2>
      <Carousel
        itemsArray={instagramData}
        ItemComponent={InstagramCard}
        arrowIcon={ArrowIcon}
      />
    </section>
  )
}
export default IntagramSection