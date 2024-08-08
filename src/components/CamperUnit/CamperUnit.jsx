import css from "./CamperUnit.module.css";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import CamperDetails from "../Modal/CamperDetails/CamperDetails";
import { addFavorite, removeFavorite } from "../../redux/favorive/slice";
import { selectFavorites } from "../../redux/favorive/selectors";
import PropTypes from "prop-types";
import { useModalContext } from "../../context/useModalContext";


const CamperUnit = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const { openModal } = useModalContext();

  useEffect(() => {
    const isCamperFavorite = favorites.find((fav) => fav._id === camper._id);
    setIsFavorite(isCamperFavorite);
  }, [favorites, camper._id]);

  const handleToggleFav = useCallback(() => {
    dispatch(isFavorite ? removeFavorite(camper._id) : addFavorite(camper));
    setIsFavorite((prev) => !prev);
  }, [dispatch, camper, isFavorite]);

  return (
    <>
      <img src={camper.gallery[0]} alt={camper.name} className={css.camperImg} />
      <div className={css.camperInfo}>
        <div className={css.title}>
          <h3>{camper.name}</h3>
          <div className={css.addFavContainer}>
            <span>&#8364;{camper.price.toFixed(2)}</span>
            <button onClick={handleToggleFav} className={css.addToFavorite}>
              <Icon nameIcon="heart" className={isFavorite ? css.iconHeartPressed : css.iconHeart} />
            </button>
          </div>
        </div>
        <div className={css.camperAddInfo}>
          <Icon nameIcon="rating" className={css.iconRating} />
          <p className={css.camperRating}>{camper.rating}</p>
          <p className={css.camperReviews}>&#x2768;{camper.reviews.length} Reviews&#x2769;</p>
          <Icon nameIcon="mapPin" className={css.iconMap} />
          <p>{camper.location}</p>
        </div>
        <p className={css.camperDescription}>{camper.description}</p>
        <button onClick={() => openModal('camper_modal', <CamperDetails camper={camper} />)} className={css.showMore}>
          Show more
        </button>
      </div>
    </>
  );
};

CamperUnit.propTypes = {
  camper: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CamperUnit;
