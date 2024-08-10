import css from "./FavoritesPage.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { selectFavorites } from "../../redux/favorive/selectors";
import CamperRoll from "../../components/CamperRoll/CamperRoll";
import { selectIsLoading, selectError } from "../../redux/camper/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  return (
    <>
      <HomeTitle>Favorites</HomeTitle>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <section className={css.favoritesContainer}>
        <h2 className={css.favoritesTitle}>Saved Campers</h2>
        {favorites.length > 0 && (
          <p className={css.favoritesDescription}>
            Here you can view all the campers you've marked as favorites.
            Discover and enjoy your selected options!
          </p>
        )}
        <button type="button" className={css.backButton}>
          <Link to="/catalog">Back to Catalog</Link>
        </button>
        <CamperRoll ads={favorites} />
        {favorites.length === 0 && (
          <>
            <p className={css.noFavoritesMessage}>
            You haven’t added any favorites yet. Explore the catalog to find campers you’ll love!
            </p>
            <div className={css.favoritesImage}></div>
          </>
        )}
      </section>
    </>
  );
};

export default FavoritesPage;
