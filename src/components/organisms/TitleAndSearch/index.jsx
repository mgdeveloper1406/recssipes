import { useRef } from 'react'
import SearchIcon from '/icons/searchIcon.svg'

import './styles.scss'

const TitleAndSearch = ({ filterArticles }) => {

  const inputRef = useRef()

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') handleOnClick()
  }

  const handleOnClick = () => {
    filterArticles(inputRef.current.value)
  }

  return (
    <div className='titleAndSearch'>
      <h1 className='titleAndSearch__title'>Blog & Article</h1>
      <p className='titleAndSearch__text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      <div className='titleAndSearch__search'>
        <input
          className='titleAndSearch__input'
          type='search'
          placeholder='Search article, news or recipe...'
          onKeyPress={handleOnKeyPress}
          ref={inputRef}
        >
        </input>
        <button className='titleAndSearch__button--mobile' onClick={handleOnClick} aria-label='Search'>
          <img className='titleAndSearch__buttonIcon' src={SearchIcon} />
        </button>
        <button className='titleAndSearch__button--desktop' onClick={handleOnClick} aria-label='Search'>Search</button>
      </div>
    </div>
  )
}

export default TitleAndSearch