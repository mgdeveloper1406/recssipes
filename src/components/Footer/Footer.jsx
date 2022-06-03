import logo from '/icons/logo.svg'
import face from '/icons/face.svg'
import instagram from '/icons/instagram.svg'
import twitter from '/icons/twitter.svg'

import './footer.scss'

function Footer() {

  return (
    <div className='footer-container'>
        <footer className='footer'>
        <div className='icon-text'>
          <div className='teste1'>
          <img className='icone'src={logo}/>
          <p className='footer-text'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
          </div>
          <div className='teste2'>
          <a className='link-footer'>Recipes</a> <a className='link-footer' >Blog</a> <a className='link-footer' >Contact</a>  <a className='link-footer'>About us</a>
          </div>
      </div>
          <hr></hr>
          <div className='copyr'>
          <p className='copy'> &copy;2020 Flowbase.Powered by <span className='webflow'>Webflow</span></p>
          </div> 
          <div className='icons'> 
          <a className='links-footer-icon'>
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
