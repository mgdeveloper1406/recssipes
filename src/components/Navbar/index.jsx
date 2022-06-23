import { useState } from 'react'
import MobileMenu from '../MobileMenu';
import SocialsMenu from '../SocialsMenu';
import NavigationMenu from '../NavigationMenu';

import logo from "/imgs/foodieland-logo-small.png"

import './styles.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar__contentContainer">
        <div className='navbar__homeLogoContainer'>
          <a
            className='navbar__homeLogo'
            href="/"
          >
            <img className='navbar__logoImg' src={logo} alt="foodieland logo" />
          </a>
        </div>

        <NavigationMenu />
        <MobileMenu />
        <SocialsMenu className='navbar__socialsMenu' socialListDisabled />
      </div>
    </nav>
  );
};

export default Navbar;