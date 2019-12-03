export default {
  menuItems: [],
  modalText: '',
  showTextModal: false,
  showInputModal: false,
  showModal: false,
  categories: [],
  orderState: null,
  editCart: false,
  itemToEdit: null,
  itemToEditIndex: null,
  showCart: null,
  status: null,
  productionTime: null,
  showProductionTime: false,
  menuOptions: [
    { name: 'Tomat', price: 12 },
    { name: 'Jordnötter', price: 3 },
    { name: 'Champinjoner', price: 5 },
    { name: 'Bambuskott', price: 10 },
    { name: 'Paprika', price: 10 },
  ],
  order: {
    table: 'take away',
    foodItems: [],
    drinkItems: [],
  },
  orderDetails: {
    protein: '',
    spice: null,
    add: [],
    remove: [],
  },
};
