import { useState } from 'react';
import NavigationMenu from '../NavigationMenu';

import './styles.scss'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState)
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false)
  };

  return (
    <div className='mobileMenu__container'>
      <button
        className={isMenuOpen ? 'button mobileMenu__button' : 'button mobileMenu__button--open'}
        onClick={handleMenuClick}
      >
      </button>

      <NavigationMenu
        navigationMenuStatus={
          isMenuOpen
            ? `navigationMenuMobile--open`
            : `navigationMenuMobile--closed`
        }
        navigationList={`navigationList`}
        navigationListItem={`navigationList-item`}
        navigationLink={`navigationLink`}
        handleNavigationClick={handleNavigationClick}
      />
    </div>
  );
};

export default MobileMenu;