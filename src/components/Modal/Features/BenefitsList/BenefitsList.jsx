import PropTypes from 'prop-types';
import css from './BenefitsList.module.css';
import Icon from '../../../Icon/Icon';
import generateCamperBenefits from '../../../../utils/camperBenefits';

const BenefitsList = ({ camper }) => {
  const camperBenefits = generateCamperBenefits(camper);

  return (
    <ul className={css.benefitsList}>
      {camperBenefits.map(
        ({ label, value, iconName }, index) =>
          value !== 0 &&
          value !== '' && (
            <li className={css.benefitsItem} key={index}>
              <Icon className={css.iconBenefits} nameIcon={iconName} />
              {value} {label}
            </li>
          )
      )}
    </ul>
  );
};

BenefitsList.propTypes = {
  camper: PropTypes.shape({
    adults: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    transmission: PropTypes.string,
    engine: PropTypes.string,
    details: PropTypes.shape({
      TV: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      airConditioner: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      kitchen: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      beds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      CD: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      radio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      hob: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      toilet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      shower: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      bathroom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      freezer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      gas: PropTypes.string,
      water: PropTypes.string,
      microwave: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }).isRequired,
  }).isRequired,
};

export default BenefitsList;
