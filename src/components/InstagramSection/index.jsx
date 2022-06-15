import Carousel from '@components/Carousel'
import InstagramCard from '@components/InstagramCard';
import ArrowIcon from "/icons/arrow.svg";
import './styles.css'


const IntagramSection = () => {
  return (
    <section>
      <Carousel
        itemsArray={instagramData}
        ItemComponent={InstagramCard}
        arrowIcon={ArrowIcon}
      />
    </section>
  )
}
export default IntagramSection