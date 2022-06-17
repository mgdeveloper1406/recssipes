import './styles.scss'

const InstagramCard = ({ image }) => {
  return (
    <li className='instagramCard'>
      <img src={image} className='instagramCard__image' />
    </li>
  );
};
export default InstagramCard;