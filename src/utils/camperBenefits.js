const generateCamperBenefits = camper => {
  const {
    adults = '',
    transmission = '',
    engine = '',
    details: {
      TV = '',
      airConditioner = '',
      kitchen = '',
      beds = '',
      CD = '',
      radio = '',
      hob = '',
      toilet = '',
      shower = '',
      bathroom = '',
      freezer = '',
      gas = '',
      water = '',
      microwave = '',
    } = {},
  } = camper || {};

 
  const formatCountAndLabel = (count, singularLabel, pluralLabel = singularLabel + 's') => 
    count === 1 ? `${count} ${singularLabel}` : `${count} ${pluralLabel}`;

  const formattedGas = gas && `${parseInt(gas)} ${gas.replace(/^\d+/, '')}`;
  const formattedWater = water && `${parseInt(water)} ${water.replace(/^\d+/, '')}`;

  return [
    { label: 'adults', value: formatCountAndLabel(adults, 'adult'), iconName: 'people' },
    { label: 'transmission', value: transmission.charAt(0).toUpperCase() + transmission.slice(1), iconName: 'automatic' },
    { label: 'air conditioner', value: airConditioner > 0 ? 'AC' : '', iconName: 'airContainer' },
    { label: 'engine', value: engine.charAt(0).toUpperCase() + engine.slice(1), iconName: 'petrol' },
    { label: 'kitchen', value: formatCountAndLabel(kitchen, 'kitchen'), iconName: 'kitchen' },
    { label: 'beds', value: formatCountAndLabel(beds, 'bed'), iconName: 'bed' },
    { label: 'CD', value: CD > 0 ? 'CD' : '', iconName: 'CD' },
    { label: 'radio', value: radio > 0 ? 'Radio' : '', iconName: 'radio' },
    { label: 'hob', value: formatCountAndLabel(hob, 'hob'), iconName: 'hob' },
    { label: 'toilet', value: formatCountAndLabel(toilet, 'toilet'), iconName: 'toilet' },
    { label: 'shower', value: formatCountAndLabel(shower, 'shower'), iconName: 'shower' },
    { label: 'bathroom', value: formatCountAndLabel(bathroom, 'bathroom'), iconName: 'bathroom' },
    { label: 'freezer', value: formatCountAndLabel(freezer, 'freezer'), iconName: 'freezer' },
    { label: 'gas', value: formattedGas, iconName: 'gas' },
    { label: 'water', value: formattedWater, iconName: 'water' },
    { label: 'microwave', value: formatCountAndLabel(microwave, 'microwave'), iconName: 'microwave' },
    { label: 'TV', value: formatCountAndLabel(TV, 'TV'), iconName: 'TV' },
  ].filter(benefit => benefit.value);
};

export default generateCamperBenefits;
