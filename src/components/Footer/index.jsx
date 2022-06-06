import logo from '/icons/logo.svg'
import face from '/icons/face.svg'
import instagram from '/icons/instagram.svg'
import twitter from '/icons/twitter.svg'
import { Link } from 'react-router-dom'
import SocialsMenu from '../SocialsMenu'

import './styles.scss'

function Footer() {

  return (
    <div className='footer__container'> {/* footer-container*/}
        <footer className='footer'>
        <div className='footer__header'>{/* icontext*/}
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
          <div className='footer__icons'> {/* icons*/}
          <SocialsMenu/>
          <a className='links-footer'> 
          <img className="face-icon"src={face}/>
          </a> 
          <a className='links-footer-icon'>
          <img className="twitter-icon" src={twitter}/>
          </a>
          <a className='links-footer-icon'>
          <img className="insta-icon" src={instagram}/>
          </a>
          </div>
          </footer>
   </div>

       

    
  )
}


export default Footer;
