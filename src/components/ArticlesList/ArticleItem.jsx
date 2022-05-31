import React from 'react'

const ArticleItem = ({
  id,
  image,
  title,
  description,
  userImage,
  userName,
  plublishedAt
}) => {
  return (
    <>
      <li key={id} className='articleItem'>
        <div className="articleItem__image">
          <img src={image} />
        </div>
        <div className="articleItem__info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="articleItem__userInfo">
          <img src={userImage} />
          <p>{userName}</p>
          <p>{plublishedAt}</p>
        </div>
      </li>
    </>
  );
};

export default ArticleItem;