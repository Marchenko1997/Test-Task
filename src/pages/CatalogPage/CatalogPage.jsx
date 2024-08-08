import css from './CatalogPage.module.css';
import CamperRoll from '../../components/CamperRoll/CamperRoll';
import { useDispatch, useSelector } from 'react-redux';
import  {getCampers}  from '../../redux/camper/operations';
import { useEffect } from 'react';
import { selectCampers } from '../../redux/ads/selector';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import FilterForm from '../../components/FilterForm/FilterForm';



const CatalogPage = () => {
  const dispatch = useDispatch();
  const ads = useSelector(selectCampers) || {};

  useEffect(() => {
    dispatch(getCampers()); 
  }, [dispatch]);

  const transformedAds = Object.values(ads).filter(ad => typeof ad === 'object' && ad._id);

  if (Object.keys(ads).length === 0) {
    return <p>Loading campers...</p>; // Или добавьте более сложный индикатор загрузки
  }


  return (
    <>
    <HomeTitle>Camper Catalog</HomeTitle>
    <div className={css.wrapper}>
      <section className={css.sectionCatalog}>
      <FilterForm />
        <CamperRoll ads={transformedAds} />
      </section>
    </div>
    </>
  )
}

export default CatalogPage