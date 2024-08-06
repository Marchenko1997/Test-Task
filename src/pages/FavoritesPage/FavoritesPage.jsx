import css from './FavoritesPage.module.css';
import Favorite from '../../components/Favorite/Favorite';


const FavoritesPage = () => {
  return (
    <div className={css.container}>
        <Favorite/>
    </div>
  )
}

export default FavoritesPage