import css from "./CatalogPage.module.css";
import CamperRoll from "../../components/CamperRoll/CamperRoll";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/camper/operations";
import { useEffect } from "react";
import {
  selectFilteredCampers,
  selectIsLoading, selectError
} from "../../redux/camper/selectors";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import FilterForm from "../../components/FilterForm/FilterForm";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const ads = useSelector(selectFilteredCampers) || {};
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const transformedAds = Object.values(ads).filter(
    (ad) => typeof ad === "object" && ad._id
  );

  return (
    <>
      <HomeTitle>Camper Catalog</HomeTitle>
      <div className={css.wrapper}>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        <section className={css.sectionCatalog}>
          <FilterForm />
          {ads.length === 0 ? (
            <p className={css.noCampersFiltered}>
              There is no campers matches your search
            </p>
          ) : (
            <CamperRoll ads={transformedAds} />
          )}
        </section>
      </div>
    </>
  );
};

export default CatalogPage;
