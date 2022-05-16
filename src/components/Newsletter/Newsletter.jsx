import React from 'react';

import './newsletter.css';

const Newsletter = () => {
  return (
    <div className={`newsletter-container`}>
      <form className={`newsletter__form`}>
        <header className={`header-container`}>
          <h2 className={`newsletter__title`}>Mussum Ipsum, cacilds vidis litro abertis.</h2>
          <p className={`newsletter__paragraph`}>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
        </header>
        <div className={`input-container`}>
          <input className={`newsletter__input`} type="email" placeholder='Your email adress...' />
          <button className={`newsletter__button`} >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;