import SearchIcon from '/icons/searchIcon.svg'
import './styles.scss'

const TitleAndSearch = () => {

  return (
    <div className='titleAndSearch__container'>
      <h1 className='titleAndSearch__title'>Blog & Article</h1>
      <p className='titleAndSearch__text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>      
      <div className='titleAndSearch__search'>
        <input className='titleAndSearch__input' placeholder='Search article, news or recipe...'></input>
        <button className='titleAndSearch__button--mobile'><img className='titleAndSearch__button__icon' src={SearchIcon} alt='Search' /></button>
        <button className='titleAndSearch__button--desktop'>Search</button>
      </div>
    </div>
  )
}

export default TitleAndSearch