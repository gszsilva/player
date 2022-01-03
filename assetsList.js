const assetsList = [
  {
    id: 1,
    type: 'hunger',
    name: 'Hamburguer',
    price: 25,
    modifiers: {
      eat: 30,
      getThirst: 10,
      getFullBladder: 5,
    }
  },
  {
    id: 2,
    type: 'hunger',
    name: 'Salad',
    price: 10,
    modifiers: {
      eat: 15,
      getThirst: -5,
      getFullBladder: -2,
    }
  },
  {
    id: 3,
    type: 'hunger',
    name: 'Coffee',
    price: 5,
    modifiers: {
      eat: 5,
      getThirst: -2,
      getFullBladder: -5,
      getRested: 5,
    }
  },
  {
    id: 4,
    type: 'thirst',
    name: 'Water',
    price: 5,
    modifiers: {
      drink: 80,
      getFullBladder: -10,
    }
  }
];