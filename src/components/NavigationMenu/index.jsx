import { Link } from 'react-router-dom';

import './styles.scss'

const NavigationMenu = () => {

  return (
    <div className='navigationMenu__container'>
      <ul className='navigationMenu'>
        <li className='navigationMenu__item' onClick={() => { }}>
          <Link to='/' className='navigationMenu__link'>Home</Link>
        </li>
        <li className='navigationMenu__item' onClick={() => { }}>
          <Link to='/recipes' className='navigationMenu__link'>Recipes</Link>
        </li>
        <li className='navigationMenu__item' onClick={() => { }}>
          <Link to='/blog' className='navigationMenu__link'>Blog</Link>
        </li>
        <li className='navigationMenu__item' onClick={() => { }}>
          <Link to='/about' className='navigationMenu__link'>About us</Link>
        </li>
        <li className='navigationMenu__item' onClick={() => { }}>
          <Link to='/contact' className='navigationMenu__link'>Contact</Link>
        </li>
      </ul>
    </div>
  )
};

export default NavigationMenu;

