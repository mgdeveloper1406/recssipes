import { useState } from 'react';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

import './mobileMenu.scss';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState)
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false)
  };

  return (
    <div className='mobile-menu__container'>
      <button
        className={isMenuOpen ? 'button mobile-menu__button' : 'button mobile-menu__button--open'}
        onClick={handleMenuClick}
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
        handleNavigationClick={handleNavigationClick}
      />
    </div>
  );
};

export default MobileMenu;