import DocumentTitle from '../../components/HomeTitle/HomeTitle';
import { Link } from 'react-router-dom';
import css from "./NotFoundPage.module.css";



const NotFoundPage = () => {
    console.log("Loading NotFoundPage");
  return (
    <>
      <DocumentTitle>Not found</DocumentTitle>
      <section className={css.container}>
        <p className={css.errorMessage}>
         Oops! This page is unavailable!
        </p>
        <button type="button" className={css.backHome}>
          <Link to="/">Back home</Link>
        </button>
      </section>
    </>
  );
};

export default NotFoundPage;
