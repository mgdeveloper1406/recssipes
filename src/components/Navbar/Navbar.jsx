import { useState } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu';
import SocialsMenu from '../SocialsMenu/SocialsMenu';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

import logo from "/imgs/foodieland-logo-small.png"

import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__home-logo-container'>
        <a
          className='navbar__home-logo'
          href="/"
        >
          <img className='navbar-img' src={logo} alt="foodieland logo" />
        </a>
      </div>

      <NavigationMenu
        navigationMenuStatus='navigation-menu-desktop'
        navigationList={`navigation-desktop-list`}
        navigationListItem={`navigation-desktop-list-item`}
        navigationLink={`navigation-desktop-link`}
        handleNavigationClick={() => { }}
      />
      <MobileMenu />
      <SocialsMenu />
    </nav>
  );
};

export default Navbar;