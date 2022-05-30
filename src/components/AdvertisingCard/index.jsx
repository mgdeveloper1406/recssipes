import { Link } from 'react-router-dom'

import './styles.scss'

const AdvertisingCard = ({ data }) => {
  return (
    <Link to={data.linkPath} className='advertisingCard__link'>
      <picture className='advertisingCard'>
        <source srcSet={data.imgSmall} media='(max-width: 450px)' />
        <img className='advertisingCard__img' src={data.img} alt={data.alt} />
      </picture>
    </Link>
  )
}

export default AdvertisingCard
