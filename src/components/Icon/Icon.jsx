import sprite from '../../assets/symbol-defs.svg';
import PropTypes from 'prop-types';

const Icon = ({ nameIcon, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${nameIcon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
    nameIcon: PropTypes.string.isRequired,
    className: PropTypes.string
  };

export default Icon;
