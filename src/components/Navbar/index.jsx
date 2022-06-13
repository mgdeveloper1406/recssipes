import { useState } from 'react'
import MobileMenu from '../MobileMenu';
import SocialsMenu from '../SocialsMenu';
import NavigationMenu from '../NavigationMenu';

import logo from "/imgs/foodieland-logo-small.png"

import './styles.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-content-container">
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
        <SocialsMenu className='navbar__socialsMenu' socialListDisabled />
      </div>
    </nav>
  );
};

export default Navbar;