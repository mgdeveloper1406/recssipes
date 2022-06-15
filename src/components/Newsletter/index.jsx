import React from 'react';

import './styles.scss'

const Newsletter = () => {
  return (
    <div className={`newsletter-container`}>
      <div className={`newsletter`}>
        <form className={`newsletter__form`}>
          <header className={`header-container`}>
            <h2 className={`newsletter__title`}>Deliciousness to your inbox</h2>
            <p className={`newsletter__paragraph`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
          </header>
          <div className={`input-container`}>
            <input className={`newsletter__input`} type="email" placeholder='Your email adress...' />
            <button className={`newsletter__button`} >Subscribe</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Newsletter;