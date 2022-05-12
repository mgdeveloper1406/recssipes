import { useState } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu';

import logo from "/imgs/foodieland-logo-large.png"

import './navbar.css'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true)

  return (
    <nav className='navbar'>
      <a className={isMobile ? 'navbar__home-logo mobile' : 'navbar__home-logo'} href="/">
        <img src={logo} alt="foodieland logo" />
      </a>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;