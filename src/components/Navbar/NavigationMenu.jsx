import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
  const {
    navigationMenuStatus,
    navigationLink,
    navigationList
  } = props

  return (
    <ul className={navigationMenuStatus}>
      <Link to='/' className={navigationLink}>
        <li className={navigationList} >Home</li>
      </Link>
      <Link to='/recipes' className={navigationLink}>
        <li className={navigationList} >Recipes</li>
      </Link>
      <Link to='/blog' className={navigationLink}>
        <li className={navigationList} >Blog</li>
      </Link>
      <Link to='/about' className={navigationLink}>
        <li className={navigationList} >About us</li>
      </Link>
      <Link to='/contact' className={navigationLink}>
        <li className={navigationList} >Contact</li>
      </Link>
    </ul>
  )
};

export default NavigationMenu;
