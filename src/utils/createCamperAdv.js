const createCamperAdv = camper => {
    const { adults, transmission, engine, details } = camper;
  
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
        value: engine.charAt(0).toUpperCase() + engine.slice(1),
        iconName: 'petrol',
      },
      {
        label: '',
        value:
          details.kitchen > 0
            ? details.kitchen === 1
              ? 'Kitchen'
              : `${details.kitchen} kitchens`
            : '',
        iconName: 'kitchen',
      },
      {
        label: details.beds === 1 ? 'bed' : 'beds',
        value: details.beds,
        iconName: 'bed',
      },
      {
        label: '',
        value: details.airConditioner > 0 ? 'AC' : '',
        iconName: 'airContainer',
      },
    ];
  };
  
  export default createCamperAdv;