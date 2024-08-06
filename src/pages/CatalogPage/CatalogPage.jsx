import css from './CatalogPage.module.css';
import Catalog from '../../components/Catalog/Catalog'


const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
        <Catalog/>
    </div>
  )
}

export default CatalogPage