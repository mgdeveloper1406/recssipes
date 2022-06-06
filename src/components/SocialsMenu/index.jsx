import { Link } from 'react-router-dom'
import fbLogo from '/icons/facebook.svg'
import twitterLogo from '/icons/twitter-small.svg'
import instagramLogo from '/icons/instagram.svg'

const SocialsMenu = () => {
  return (
    <ul className='socialList'>
      <li className='social-list-item'>
        <Link
          to='/facebook'
          className='social-link'
        >
          <img src={fbLogo} alt="facebook logo" />
        </Link>
      </li>
      <li>
        <Link
          to='/twitter'
          className='social-icon'
        >
          <img src={twitterLogo} alt="twitter logo" />
        </Link>
      </li>
      <li>
        <Link
          to='/instagram'
          className='social-icon'
        >
          <img src={instagramLogo} alt="instagram logo" />
        </Link>
      </li>
    </ul>
  )
}

export default SocialsMenu;