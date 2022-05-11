import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true)

  return (
    <nav className='navbar'>
      <a className={isMobile ? 'navbar__home-logo mobile' : 'navbar__home-logo'} href="/">
        <img src="../../../src/assets/imgs/foodieland-logo-large.png" alt="foodieland logo" />
      </a>

      <ul className={'nav-links'}>
        <Link to='/' className='nav-link home'>
          <li>Home</li>
        </Link>
        <Link to='/recipes' className='nav-link recipes'>
          <li>Recipes</li>
        </Link>
        <Link to='/blog' className='nav-link blog'>
          <li>Blog</li>
        </Link>
        <Link to='/about' className='nav-link about'>
          <li>About us</li>
        </Link>
        <Link to='/contact' className='nav-link contact'>
          <li>Contact</li>
        </Link>
      </ul>

      <ul className={isMobile ? ' socials mobile' : 'socials'}>
        <Link to='www.facebook.com/users/foodieland' className='social-icon facebook-icon'>
        </Link>
        <Link to='www.twitter.com/Foodieland' className='social-icon twitter-icon'>
        </Link>
        <Link to='www.instagram.com/foodieland' className='social-icon instagram-icon'>
        </Link>
      </ul>

      <button
        className={isMobile ? 'nav-button mobile' : 'nav-button'}
        onClick={() => { }}
      >
      </button>
    </nav>
  );
};


export default Navbar;