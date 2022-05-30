import { Link } from 'react-router-dom'

import './styles.scss'

const AdvertisingCard = ({ data }) => {
  return (
    <Link to={data.linkPath} className='advertisingCard'>
      <img className='advertisingCard__img' src={data.img} alt={data.alt}></img>
    </Link>
  )
}

export default AdvertisingCard
