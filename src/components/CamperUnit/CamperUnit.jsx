import css from "./CamperUnit.module.css";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import CamperModal from "../CamperModal/CamperModal";
import { addFavorite, removeFavorite } from "../../redux/favorive/slice";
import { selectFavorites } from "../../redux/favorive/selectors";
import PropTypes from 'prop-types';
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
      {/* Изображение кемпера */}
      <img src={camper.gallery[0]} alt={camper.name} className={css.camperImg} />
      <div className={css.camperInfo}>
        {/* Основная информация о кемпере */}
        <div className={css.title}>
          <h3>{camper.name}</h3>
          <div className={css.camperInfo}>
            <span>&#8364;{camper.price.toFixed(2)}</span> {/* Цена кемпера */}
            <button onClick={handleToggleFav} className={css.addToFavorite}>
              <Icon iconName="heart" className={isFavorite ? css.iconHeartPressed : css.iconHeart} />
            </button>
          </div>
        </div>
        <div className={css.camperAddInfo}>
          <Icon iconName="rating" className={css.iconRating} />
          <p>{camper.rating}</p> {/* Рейтинг кемпера */}
          <p>&#x2768;{camper.reviews.length} Reviews&#x2769;</p> {/* Количество отзывов */}
          <Icon iconName="mapPin" className={css.iconMap} />
          <p>{camper.location}</p> {/* Местоположение кемпера */}
        </div>
        <p>{camper.description}</p> {/* Описание кемпера */}
        <ul>
          {/* Список преимуществ кемпера */}
          {/* {camperPros.map(({ label, value, iconName }) => value && (
            <li key={`${camper._id}-${iconName}`}>
              <Icon iconName={iconName} />
              {value} {label}
            </li>
          ))} */}
        </ul>
        {/* Кнопка для открытия модального окна с дополнительной информацией */}
        <button onClick={() => openModal('camper_modal', <CamperModal camper={camper} />)} className={css.showMore}>
          Show more
        </button>
      </div>
    </>
  );
};

CamperUnit.propTypes = {
    camper: PropTypes.shape({
      _id: PropTypes.string.isRequired, // ID кемпера
      name: PropTypes.string.isRequired, // Название кемпера
      gallery: PropTypes.arrayOf(PropTypes.string).isRequired, // Галерея изображений кемпера
      price: PropTypes.number.isRequired, // Цена кемпера
      rating: PropTypes.number.isRequired, // Рейтинг кемпера
      reviews: PropTypes.arrayOf(PropTypes.object).isRequired, // Массив отзывов
      location: PropTypes.string.isRequired, // Местоположение кемпера
      description: PropTypes.string.isRequired, // Описание кемпера
      pros: PropTypes.arrayOf(PropTypes.shape({ // Список преимуществ
        label: PropTypes.string,
        value: PropTypes.string,
        iconName: PropTypes.string,
      })).isRequired
    }).isRequired
  };
export default CamperUnit;
