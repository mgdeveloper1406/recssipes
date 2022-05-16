import React, { useState } from 'react'
import NavigationMenu from '../NavigationMenu/NavigationMenu'

import './mobileMenu.css'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <div className='mobile-menu__container'>
      <button
        className={isMenuOpen ? 'button mobile-menu__button' : 'button mobile-menu__button--open'}
        onClick={handleClick}
      >
      </button>

      <NavigationMenu
        navigationMenuStatus={
          isMenuOpen
            ? `navigation-menu-mobile--open`
            : `navigation-menu-mobile--closed`
        }
        navigationList={`navigation-list`}
        navigationListItem={`navigation-list-item`}
        navigationLink={`navigation-link`}
      />
    </div>
  )
}

export default MobileMenu