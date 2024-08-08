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
  } = camper;

  const formattedGas = gas && `${parseInt(gas)} ${gas.replace(/^\d+/, '')}`;
  const formattedWater =
    water && `${parseInt(water)} ${water.replace(/^\d+/, '')}`;

  return [
    {
      label: adults === 1 ? 'adult' : 'adults',
      value: adults,
      iconName: 'people',
    },
    {
      label: '',
      value: transmission.charAt(0).toUpperCase() + transmission.slice(1),
      iconName: 'automatic',
    },
    {
      label: '',
      value: airConditioner > 0 ? 'AC' : '',
      iconName: 'airContainer',
    },
    {
      label: '',
      value: engine.charAt(0).toUpperCase() + engine.slice(1),
      iconName: 'petrol',
    },
    {
      label: '',
      value:
        kitchen === 0 ? '' : kitchen === 1 ? 'Kitchet' : `${kitchen} kitchens`,
      iconName: 'kitchen',
    },
    {
      label: beds === 1 ? 'bed' : 'beds',
      value: beds,
      iconName: 'bed',
    },
    {
      label: 'air conditioner',
      value: airConditioner > 0 ? airConditioner : '',
      iconName: 'conditioner',
    },
    { label: '', value: CD > 0 ? 'CD' : '', iconName: 'CD' },
    { label: '', value: radio > 0 ? 'Radio' : '', iconName: 'radio' },
    {
      label: '',
      value: hob === 0 ? '' : hob === 1 ? 'Hob' : `${hob} hobs`,
      iconName: 'hob',
    },
    {
      label: '',
      value: toilet === 0 ? '' : toilet === 1 ? 'Toilet' : `${toilet} toilets`,
      iconName: 'toilet',
    },
    {
      label: '',
      value: shower === 0 ? '' : shower === 1 ? 'Shower' : `${shower} showers`,
      iconName: 'shower',
    },
    {
      label: '',
      value:
        bathroom === 0
          ? ''
          : bathroom === 1
          ? 'Bathroom'
          : `${bathroom} bathrooms`,
      iconName: 'bathroom',
    },
    {
      label: '',
      value:
        freezer === 0 ? '' : freezer === 1 ? 'Freezer' : `${freezer} freezers`,
      iconName: 'freezer',
    },
    { label: 'Gas', value: formattedGas, iconName: 'gas' },
    { label: 'Water', value: formattedWater, iconName: 'water' },
    {
      label: '',
      value:
        microwave === 0
          ? ''
          : microwave === 1
          ? 'Microwave'
          : `${microwave} microwaves`,
      iconName: 'microwave',
    },
    {
      label: '',
      value: TV === 0 ? '' : TV === 1 ? 'TV' : `${TV} TVs`,
      iconName: 'TV',
    },
  ];
};

  export default generateCamperBenefits;
  