export default {
  menuItems: [],
  modalText: '',
  showTextModal: false,
  showInputModal: false,
  showModal: false,
  categories: [],
  orderState: null,
  menuOptions: [
    { name: 'Tomat', price: 12 },
    { name: 'Jordnötter', price: 3 },
    { name: 'Champinjoner', price: 5 },
    { name: 'Bambuskott', price: 10 },
    { name: 'Paprika', price: 10 },
  ],
  order: {
    table: 0,
    time: new Date(),
    foodItems: [],
    drinkItems: [],
  },
};
