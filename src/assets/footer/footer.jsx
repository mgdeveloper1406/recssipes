import { useState } from 'react'
import logo from '../icons/logo.svg'
import face from '../icons/face.svg'
import Shape from '../icons/Shape.svg'
import twitter from '../icons/twitter.svg'
import shape2 from  '../icons/shape2.svg'
import Oval from  '../icons/Oval.svg'
import './footer.css'


function Footer() {
  
  return (
        <footer>
          <img className='icone'src={logo}/>
          <p>Testinho br testando o teste do teste da testa testado</p>
          <a>Recipes</a> <a>Blog</a> <a>Contact</a>  <a>About us</a>
          <hr></hr>
          <p className='copy'> &copy;2020 Flowbase.Powered by <span className='webflow'>Webflow</span></p>
          <img className='face-icon' src={face}/>
          <img className= 'twitter-icon'src={twitter}/>
          <img className='out-insta'src={Shape}/>
          <img className='inside-insta' src={shape2} />
          <img className='dot-insta' src={Oval} />

        </footer>

    
  )
}

export default Footer

