import css from './HomePage.module.css';
import Home from '../../components/Home/Home';




const HomePage = () => {
  return (
    <div className={css.wrapperHome}>
      <Home/>
    </div>
  )
}

export default HomePage