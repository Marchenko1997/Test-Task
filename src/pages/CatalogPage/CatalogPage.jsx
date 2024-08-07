import css from './CatalogPage.module.css';
import CamperRoll from '../../components/CamperRoll/CamperRoll';
import { useDispatch, useSelector } from 'react-redux';
// import { getCampers } from '../../redux/camper/operations';
import { useEffect } from 'react';



const CatalogPage = () => {
  // const dispatch = useDispatch();
  // const ads = useSelector(selectFilteredCampers);

  // useEffect(() => {
  //   dispatch(getCampers());
  // }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <section className={css.sectionCatalog}>
        <CamperRoll />
      </section>
    </div>
  )
}

export default CatalogPage