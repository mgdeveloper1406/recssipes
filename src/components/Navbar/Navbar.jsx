import { useState } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu';

import logo from "/imgs/foodieland-logo-large.png"

import './navbar.css'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true)

  return (
    <nav className='navbar'>
      <div className='navbar__home-logo-container'>
        <a
          className={
            isMobile
              ? 'navbar__home-logo mobile'
              : 'navbar__home-logo'
          }
          href="/"
        >
          <img src={logo} alt="foodieland logo" />
        </a>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;