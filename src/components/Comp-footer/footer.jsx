
import logo from '/public/icons/logo.svg'
import face from '/public/icons/face.svg'
import Shape from '/public/icons/instagram.svg'
import twitter from '/public/icons/twitter.svg'


import './Footer.css'


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
