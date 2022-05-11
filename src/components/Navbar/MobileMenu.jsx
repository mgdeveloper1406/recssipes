import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'

import './mobileMenu.css'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='mobile-menu__container'>
      <button
        className={isMenuOpen ? 'button mobile-menu__button' : 'button mobile-menu__button--open'}
        onClick={handleClick}
      >
      </button>

      <NavigationMenu
        navigationMenuStatus={isMenuOpen ? `navigation-menu-mobile--open` : `navigation-menu-mobile--closed`}
        navigationLink={`navigation-link`}
        navigationList={`navigation-list`}
      />
    </div>
  )
}

export default MobileMenu