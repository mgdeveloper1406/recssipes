import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useWindowWidth from '@hooks/usePageWidth'

import './styles.scss'

const NavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (windowWidth >= 1024) {
      setIsMobileMenuOpen(false)
    }
  }, [windowWidth])

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState)
  }

  const handleMobileNavigationClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <button
        className={`mobileMenu__button ${isMobileMenuOpen ? 'mobileMenu__button--open' : 'mobileMenu__button--close'}`}
        onClick={handleMobileMenuClick}
      >
      </button>
      <div className={`navigationMenu__container ${isMobileMenuOpen ? 'mobileMenu--open' : 'mobileMenu--closed'}`}>
        <ul className='navigationMenu'>
          <li className='navigationMenu__item' onClick={handleMobileNavigationClick}>
            <Link to='/' className='navigationMenu__link'>Home</Link>
          </li>
          <li className='navigationMenu__item' onClick={handleMobileNavigationClick}>
            <Link to='/recipes' className='navigationMenu__link'>Recipes</Link>
          </li>
          <li className='navigationMenu__item' onClick={handleMobileNavigationClick}>
            <Link to='/blog' className='navigationMenu__link'>Blog</Link>
          </li>
          <li className='navigationMenu__item' onClick={handleMobileNavigationClick}>
            <Link to='/about' className='navigationMenu__link'>About us</Link>
          </li>
          <li className='navigationMenu__item' onClick={handleMobileNavigationClick}>
            <Link to='/contact' className='navigationMenu__link'>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavigationMenu
