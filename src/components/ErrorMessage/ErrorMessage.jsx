import css from './ErrorMessage.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message = '' }) => {
  return (
    <section className={css.errorMessage}>
      <p className={css.errorText}>
        &#x261D;
        {message.length > 0
          ? message
          : 'An unexpected error happened! Try reloading the page to resolve it'}
      </p>
      <button type="button" className={css.backHome}>
        <Link to="/">Back home</Link>
      </button>
    </section>
  );
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
  };

export default ErrorMessage;
