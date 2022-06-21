import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
  const {
    navigationMenuStatus,
    navigationList,
    navigationListItem,
    navigationLink,
    handleNavigationClick
  } = props

  return (
    <div className={navigationMenuStatus}>
      <ul className={navigationList}>
        <li className={navigationListItem} onClick={handleNavigationClick}>
          <Link to='/' className={navigationLink}>Home</Link>
        </li>
        <li className={navigationListItem} onClick={handleNavigationClick}>
          <Link to='/recipes' className={navigationLink}>Recipes</Link>
        </li>
        <li className={navigationListItem} onClick={handleNavigationClick}>
          <Link to='/blog' className={navigationLink}>Blog</Link>
        </li>
        <li className={navigationListItem} onClick={handleNavigationClick}>
          <Link to='/about' className={navigationLink}>About us</Link>
        </li>
        <li className={navigationListItem} onClick={handleNavigationClick}>
          <Link to='/contact' className={navigationLink}>Contact</Link>
        </li>
      </ul>
    </div>
  )
};

export default NavigationMenu;
