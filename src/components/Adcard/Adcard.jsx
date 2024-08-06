import css from './Adcard.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToFavorites, removeFromFavorites } from '../../redux/slices/favoritesSlice';
import PropTypes from 'prop-types';

const AdCard = ({camper}) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        if (isFavorite) {
          dispatch(removeFromFavorites(camper._id));
        } else {
          dispatch(addToFavorites(camper));
        }
        setIsFavorite(!isFavorite);
      };

  return (
    <div className={css.adCard}>
    <div className={css.camperImage}>
      <img src={camper.image} alt={camper.name} />
    </div>
    <div className={css.camperDetails}>
      <h3>{camper.name}</h3>
      <p>{camper.description}</p>
      <div className={css.camperPrice}>{camper.price},00</div>
      <button onClick={toggleFavorite}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <button>Show more</button>
    </div>
  </div>
  )
}

AdCard.propTypes = {
    camper: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number.isRequired
    }).isRequired
  };

export default AdCard;