import css from './CatalogPage.module.css';
import CamperRoll from '../../components/CamperRoll/CamperRoll';
import { useDispatch, useSelector } from 'react-redux';
import  {getCampers}  from '../../redux/camper/operations';
import { useEffect } from 'react';
import { selectCampers } from '../../redux/ads/selector';



const CatalogPage = () => {
  const dispatch = useDispatch();
  const ads = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampers()); 
  }, [dispatch]);

  const transformedAds = Object.values(ads).filter(ad => typeof ad === 'object' && ad._id);


  return (
    <div className={css.wrapper}>
      <section className={css.sectionCatalog}>
        <CamperRoll ads={transformedAds} />
      </section>
    </div>
  )
}

export default CatalogPage