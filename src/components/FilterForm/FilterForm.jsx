import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './FilterForm.module.css';
import Icon from '../Icon/Icon';
import { selectFilter } from '../../redux/filter/selectors';
import {
  clearFilters,
  setDetails,
  setForm,
  setLocation,
} from '../../redux/filter/slice';
import { selectCampers } from '../../redux/camper/selectors';


const getUniqueCities = (ads) => {
  return [...new Set(ads.map(ad => {
    if (!ad || !ad.location) {
      return "Location undefined"; 
    }
    const [country, city] = ad.location.split(', ');
    return `${city} (${country})`;
  }))];
};


const FilterForm = () => {
  const allAdverts = useSelector(selectCampers);
  const dispatch = useDispatch();
  const { location = '', form = '', details = {} } = useSelector(selectFilter) || {};

  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {

    const validAdverts = allAdverts.filter(ad => ad && ad.location);
    const uniqueCities = getUniqueCities(validAdverts);
    setFilteredCities(uniqueCities);
  }, [allAdverts]);

  const handleCitySelect = (city, setFieldValue) => {
    setFieldValue('location', city);
    setShowDropdown(false);
  };

  const handleInputChange = (value, setFieldValue) => {
    setFieldValue('location', value);
    setFilteredCities(getUniqueCities(allAdverts).filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    ));
    setShowDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const initialValues = {
    location,
    form,
    details: { ...details },
  };

  const validationSchema = Yup.object().shape({
    location: Yup.string()
      .min(3, 'Too short city name!!')
      .max(58, 'Too long city name!'),
  });

  const handleSearch = (values, { resetForm }) => {
    dispatch(setLocation(values.location === 'All Cities' ? '' : values.location));
    dispatch(setForm(values.form));
    dispatch(setDetails(values.details));
    resetForm();
    setShowDropdown(false);
  };

  useEffect(() => () => {
    dispatch(clearFilters());
  }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSearch}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.filterForm}>
          <div className={css.locationSection}>
            <label htmlFor="location" className={css.textLabel}>
              Location
            </label>
            <div className={css.inputContainer} ref={dropdownRef}>
              <Icon nameIcon="mapPin" className={css.locationIcon} />
              <Field
                type="text"
                name="location"
                className={css.textInput}
                placeholder="City"
                value={values.location}
                onClick={() => setShowDropdown(!showDropdown)}
                onChange={e => handleInputChange(e.target.value, setFieldValue)}
              />
              <ErrorMessage className={css.errorMessage} name="location" component="span" />
              {showDropdown && (
                <ul className={css.dropdownMenu}>
                  <li
                    className={css.dropdownOption}
                    onClick={() => handleCitySelect('All Cities', setFieldValue)}
                  >
                    All Cities
                  </li>
                  {filteredCities.map(city => (
                    <li
                      className={css.dropdownOption}
                      key={city}
                      onClick={() => handleCitySelect(city, setFieldValue)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className={css.equipmentSection}>
            <label htmlFor="vehicle" className={css.textLabel}>
              Filters
            </label>
            <div className={css.equipmentGroup}>
              <h3 className={css.equipmentTitle}>Vehicle equipment</h3>
              <ul className={css.equipmentList}>
                {[
                  { name: 'airConditioner', label: 'AC', iconName: 'airContainer' },
                  { name: 'automatic', label: 'Automatic', iconName: 'automatic' },
                  { name: 'kitchen', label: 'Kitchen', iconName: 'kitchen' },
                  { name: 'TV', label: 'TV', iconName: 'TV' },
                  { name: 'shower', label: 'Shower/WC', iconName: 'shower' },
                ].map(item => (
                  <li className={css.equipmentItem} key={item.name}>
                    <label className={css.equipmentLabel}>
                      <Field
                        type="checkbox"
                        name={`details.${item.name}`}
                        checked={values.details[item.name]}
                        className={css.checkInput}
                        onChange={({ target: { checked } }) =>
                          setFieldValue(`details.${item.name}`, checked)
                        }
                      />
                      <div className={css.equipmentBox}>
                        <Icon nameIcon={item.iconName} className={css.iconStyle} />
                        <span>{item.label}</span>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css.filterSection}>
            <h3 className={css.filterTitle}>Vehicle type</h3>
            <ul className={css.filterList}>
              {[
                { name: 'panelTruck', label: 'Van', iconName: 'camperSmall' },
                {
                  name: 'fullyIntegrated',
                  label: 'Fully Integrated',
                  iconName: 'camperMedium',
                },
                { name: 'alcove', label: 'Alcove', iconName: 'camperBig' },
              ].map(item => (
                <li className={css.filterItem} key={item.name}>
                  <label className={css.filterLabel}>
                    <Field
                      type="radio"
                      name="form"
                      value={item.name}
                      className={css.radio}
                    />
                    <div className={css.filterBoxChosed}>
                      <Icon
                        nameIcon={item.iconName}
                        className={css.iconFilterCamper}
                      />
                      <span>{item.label}</span>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
