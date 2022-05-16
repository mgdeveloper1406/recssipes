
import logo from '/public/icons/logo.svg'
import face from '/public/icons/face.svg'
import instagram from '/public/icons/instagram.svg'
import twitter from '/public/icons/twitter.svg'


import './footer.css'


function Footer() {
  
  return (
    <div className='footer-container'>
        <footer className='footer'>
          <div className='teste1'>
          <img className='icone'src={logo}/>
          <p className='texto'>Testinho br testando o teste do teste da testa testado</p>
          </div>
          <div className='teste2'>
          <a>Recipes</a> <a>Blog</a> <a>Contact</a>  <a>About us</a>
          </div>
          <hr></hr>
          <div>
          <p className='copy'> &copy;2020 Flowbase.Powered by <span className='webflow'>Webflow</span></p>
          </div>
          <div className='icons'>
          <a><img className="face-icon"src={face}/></a> 
          <a><img className="twitter-icon" src={twitter}/></a>
          <a><img className="insta-icon" src={instagram}/></a>
          </div>
          </footer>
   </div>

       

    
  )
}


export default Footer
