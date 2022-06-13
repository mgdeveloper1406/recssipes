import logo from '/icons/logo.svg'
import { Link } from 'react-router-dom'
import SocialsMenu from '../SocialsMenu'

import './styles.scss'

function Footer() {

  return (
    <div className='footer__container'>
        <footer className='footer'>
        <div className='footer__header'>
          <div className='footer__headerInfo'> 
            <img className='footer__logo'src={logo}/>
            <p className='footer__text'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
          </div>
          <div className='footer__links'>{/* teste2*/}
            <Link to='/recipes' className='footer__link'>Recipes</Link> 
            <Link to='/blog' className='footer__link'>Blog</Link>
            <Link to='/contact' className='footer__link' >Contact</Link> 
            <Link to='/about' className='footer__link'>About us</Link>
          </div>
        </div>
          <hr className='footer__horizontalRule'></hr>
          <div className='footer__socialsContainer'>
          <p className='footer__copyright'> &copy;2020 Flowbase.Powered by <span className='footer__copyrightWebflow'>Webflow</span></p>
          <div className='footer__socials'>
          <SocialsMenu />
          </div>
          </div>
          </footer>
          </div>

       

    
  )
}


export default Footer;
