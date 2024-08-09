import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

const selectCampers = state => state.ads.campers;
const selectIsLoading = state => state.ads.loading;
const selectError = state => state.ads.error;

const formatLocation = location => {
  if (!location || typeof location !== 'string') {
    return '';
  }
  const parts = location.split(', ');
  if (parts.length < 2) {
    return '';
  }
  const [country, city] = parts;
  return `${city} (${country})`.toLowerCase();
};

const matchesLocation = (camper, locationFilter) => {
  if (!camper || !camper.location) {
    return false;
  }
  return locationFilter
    ? formatLocation(camper.location).includes(locationFilter.toLowerCase())
    : true;
};

const matchesForm = (camper, formFilter) => {
  return formFilter ? camper.form === formFilter : true;
};

const matchesDetails = (camper, detailsFilter) => {
  return Object.keys(detailsFilter).every(detail => {
    if (detail === 'automatic') return true;
    return !detailsFilter[detail] || camper.details[detail];
  });
};

const matchesTransmission = (camper, automaticFilter) => {
  return automaticFilter ? camper.transmission.toLowerCase() === 'automatic' : true;
};

const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    return campers.filter(camper => {
      if (!camper || !camper.location) {
        return false;
      }
      return (
        matchesLocation(camper, filter.location) &&
        matchesForm(camper, filter.form) &&
        matchesDetails(camper, filter.details) &&
        matchesTransmission(camper, filter.details.automatic)
      );
    });
  }
);

export { selectIsLoading, selectError, selectFilteredCampers, selectCampers };
