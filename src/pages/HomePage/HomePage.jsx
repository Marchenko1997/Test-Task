import css from "./HomePage.module.css";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.wrapperHome}>
      <HomeTitle>Camper Service</HomeTitle>

      <section className={css.sectionHome}>
        <div className={css.container}>
          <h1 className={css.mainTitle}>Discover CamperRent</h1>
          <h2 className={css.description}>
            Start your adventure by booking a camper today!
          </h2>
          <button type="button" className={css.buttonHome}>
            <Link to="/catalog">Dive in</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
