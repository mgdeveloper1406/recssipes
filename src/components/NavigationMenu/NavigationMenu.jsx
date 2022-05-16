import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
  const {
    navigationMenuStatus,
    navigationList,
    navigationListItem,
    navigationLink
  } = props

  return (
    <div className={navigationMenuStatus}>
      <ul className={navigationList}>
        <li className={navigationListItem} >
          <Link to='/' className={navigationLink}>Home</Link>
        </li>
        <li className={navigationListItem} >
          <Link to='/recipes' className={navigationLink}>Recipes</Link>
        </li>
        <li className={navigationListItem} >
          <Link to='/blog' className={navigationLink}>Blog</Link>
        </li>
        <li className={navigationListItem} >
          <Link to='/about' className={navigationLink}>About us</Link>
        </li>
        <li className={navigationListItem} >
          <Link to='/contact' className={navigationLink}>Contact</Link>
        </li>
      </ul>
    </div>
  )
};

export default NavigationMenu;
