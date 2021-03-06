export default {
  menuItems: [],
  modalText: "",
  showTextModal: false,
  showInputModal: false,
  showModal: false,
  categories: [],
  editCart: false,
  itemToEdit: null,
  itemToEditIndex: null,
  showCart: null,
  showPayment: false,
  showEmail: false,
  email: null,
  leaveComment: false,
  status: null,
  open: false,
  comment: null,
  showTheCart: false,
  lunchHour: {
    open: "11",
    close: "22"
  },
  productionTime: 20,
  showProductionTime: false,
  menuOptions: [
    { name: "Tomat", price: 12 },
    { name: "Jordnötter", price: 3 },
    { name: "Champinjoner", price: 5 },
    { name: "Bambuskott", price: 10 },
    { name: "Paprika", price: 10 }
  ],
  order: {
    table: null,
    foodItems: [],
    drinkItems: []
  },
  orderDetails: {
    protein: "",
    spice: null,
    add: [],
    remove: []
  },
  lunch: {
    productName: "lunchbuffé",
    productNr: "L1",
    price: 95,
    protein: "",
    spice: null,
    add: [],
    remove: [],
    status: 0
  }
};
