import PropTypes from 'prop-types';
import css from './VehicleTable.module.css';
import vehicleDescr from '../../../../utils/vehicleDescr';

const VehicleTable = ({ camper }) => {
  // Ensure camper is defined before processing
  if (!camper) {
    return <p>No vehicle information available.</p>;
  }

  const tableDescription = vehicleDescr(camper);

  return (
    <div className={css.vehicleContainer}>
      <table className={css.vehicleTable}>
        <tbody>
          {tableDescription.map(
            ({ label, value }, index) =>
              value !== 0 &&
              value !== '' && (
                <tr className={css.vehicleTableRow} key={index}>
                  <td className={css.tableLeft}>{label}</td>
                  <td className={css.tableRight}>{value}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};


VehicleTable.propTypes = {
  camper: PropTypes.shape({
    form: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tank: PropTypes.string,
    consumption: PropTypes.string,
  }).isRequired,
};

export default VehicleTable;
