import css from './FilterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Icon from '../Icon/Icon';

// Пример начальных значений
const location = ''; // Пустая строка или значение по умолчанию
const form = ''; // Пустая строка или значение по умолчанию
const details = {
  airConditioner: false, // Булево значение, предположим, что это checkbox
  automatic: false,
  kitchen: false,
  TV: false,
  shower: false
};

const initialValues = {
  location: location,
  form: form,
  details: {
    airConditioner: details.airConditioner,
    automatic: details.automatic,
    kitchen: details.kitchen,
    TV: details.TV,
    shower: details.shower,
  },
};

const validationSchema = Yup.object().shape({
  location: Yup.string()
    .min(3, 'Too short city name!')
    .max(58, 'Too long city name!'),
});

const FilterForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form className={css.searchForm}>
        <div className={css.locationSection}>
          <label htmlFor="location" className={css.textLabel}>
            Location
          </label>
          <div className={css.inputContainer}>
            <Icon nameIcon="mapPin" className={css.mapIconStyle} />
            <Field
              type="text"
              name="location"
              className={css.cityInput}
              placeholder="City"
            />
            <ErrorMessage name="location" component="span" className={css.errorMessage} />
          </div>
        </div>

        <div className={css.equipmentSection}>
          <label htmlFor="vehicle" className={css.textLabel}>
            Filters
          </label>
          <div className={css.filterEquipment}>
            <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
            <ul className={css.equipmentList}>
              <li>
                <label className={css.filterLabel}>
                  <Field
                    type="checkbox"
                    name="details.airConditioner"
                    className={css.checkboxStyle}
                  />
                  <div className={css.selectedEquipment}>
                    <Icon nameIcon="airContainer" className={css.filterIcon} />
                    <span>AC</span>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.equipmentSection}>
          <h3 className={css.equipmentTitle}>Vehicle type</h3>
          <ul className={css.equipmentList}>
            <li>
              <label className={css.filterLabel}>
                <Field
                  type="radio"
                  name="form"
                  value="panelTruck"
                  className={css.radioStyle}
                />
                <div className={css.selectedEquipment}>
                  <Icon nameIcon="camperSmall" className={css.camperIcon} />
                  <span>Van</span>
                </div>
              </label>
            </li>
          </ul>
        </div>

        <button type="submit" className={css.actionButton}>
          Search
        </button>
      </Form>
    </Formik>
  )
}

export default FilterForm;
