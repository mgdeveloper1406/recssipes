import Carousel from '@components/Carousel'
import InstagramCard from '@components/InstagramCard';

import ArrowIcon from '/icons/arrow.svg';
import InstagramIcon from '/icons/instagram.svg'

import './styles.scss'

const InstagramSection = ({ posts }) => {
  return (
    <section className='instagramSection'>
      <header className="instagramSection__header">
        <h2 className='instagramSection__title'>Check out @foodieland on
          <a className='instagramSection__titleLink' href="www.instagram.com/foofieland">Instagram</a>
        </h2>
        <p className='instagramSection__paragraph'>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
      </header>
      <div className="instagramSection__carouselContainer">
        <Carousel
          itemsArray={posts}
          ItemComponent={InstagramCard}
          arrowIcon={ArrowIcon}
          noMargin={true}
        />
      </div>
      <button className='instagramSection__button'>Vist our Instagram</button>
    </section>
  )
}
export default InstagramSection