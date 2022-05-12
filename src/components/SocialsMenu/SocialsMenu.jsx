import { Link } from 'react-router-dom'

const SocialsMenu = () => {
  return (
    <ul className={isMobile ? ' socials mobile' : 'socials'}>
      <Link to='www.facebook.com/users/foodieland' className='social-icon facebook-icon'>
      </Link>
      <Link to='www.twitter.com/Foodieland' className='social-icon twitter-icon'>
      </Link>
      <Link to='www.instagram.com/foodieland' className='social-icon instagram-icon'>
      </Link>
    </ul>
  )
}

export default SocialsMenu;