import logo from '/icons/logo.svg'
import { Link } from 'react-router-dom'
import SocialsMenu from '../SocialsMenu'

import './styles.scss'

function Footer() {

  return (
    <div className='footer__container'> {/* footer-container*/}
        <footer className='footer'>
        <div className='footer__header'>{/* icon-text*/}
          <div className='footer__headerInfo'> {/* teste1*/}
            <img className='footer__logo'src={logo}/>{/* icon*/}
            <p className='footer__text'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>{/* footer-text*/}
          </div>
          <div className='footer__links'>{/* teste2*/}
            <Link to='/recipes' className='footer__link'>Recipes</Link> 
            <Link to='/blog' className='footer__link'>Blog</Link>
            <Link to='/contact' className='footer__link' >Contact</Link> 
            <Link to='/about' className='footer__link'>About us</Link>{/*link-footer ou a */} 
          </div>
        </div>
          <hr className='footer__horizontalRule'></hr>
          <div className='footer__copyright__container'>{/* copyr*/}
          <p className='footer__copyright'> &copy;2020 Flowbase.Powered by <span className='footer__copyrightWebflow'>Webflow</span></p>{/* copy e span*/}
          </div> 
          <div className='footer__socials'> {/* icons*/}
          <SocialsMenu />
          </div>
          </footer>
   </div>

       

    
  )
}


export default Footer;
