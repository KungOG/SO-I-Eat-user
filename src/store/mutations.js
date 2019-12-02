export default {
  setMenuItems(state, menuItems) {
    state.menuItems = menuItems;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setOrderItemsFood(state, orderItems) {
    state.order.foodItems.push(orderItems);
  },
  setOrderItemsDrink(state, orderItems) {
    state.order.drinkItems.push(orderItems);
  },
  deleteOrderItemFood(state, orderItem) {
    state.order.foodItems.splice(orderItem, 1);
  },
  deleteOrderItemDrink(state, orderItem) {
    state.order.drinkItems.splice(orderItem, 1);
  },
  setOrderState(state, orderState) {
    state.orderState = orderState;
  },
  setTableInput(state, tableInput) {
    state.order.table = tableInput;
  },
  setShowCart(state, showCart) {
    state.showCart = showCart;
  },
  setModalText(state, modalText) {
    state.modalText = modalText;
  },
  setShowTextModal(state, boolean) {
    state.showTextModal = boolean;
  },
  setShowInputModal(state, boolean) {
    state.showInputModal = boolean;
  },
  setShowModal(state, boolean) {
    state.showModal = boolean;
  },
  setProtein(state, protein) {
    state.orderDetails.protein = protein;
  },
  setSpice(state, spice) {
    state.orderDetails.spice = spice;
  },
  setBusinessHours(state, hours) {
    state.businessHours = hours;
  },
  setOpen(state, boolean) {
    state.open = boolean;
  },
  setRemovedIngredients(state, ingredient) {
    const { remove } = state.orderDetails;
    remove.includes(ingredient) ? remove.splice(remove.indexOf(ingredient), 1) : remove.push(ingredient);
  },
  setAddedOption(state, option) {
    const { add } = state.orderDetails;
    add.includes(option) ? add.splice(add.indexOf(option), 1) : add.push(option);
  },
  resetOrderDetails(state) {
    state.orderDetails = {
      protein: '',
      spice: null,
      add: [],
      remove: [],
    };
  },
  resetItemToEdit(state) {
    state.itemToEdit = null;
    state.itemToEditIndex = null;
  },
  editCart(state, boolean) {
    state.editCart = boolean;
  },
  setItemToEdit(state, payload) {
    state.itemToEdit = payload.item;
    state.itemToEditIndex = payload.index;
    state.orderDetails.add = payload.item.add;
    state.orderDetails.remove = payload.item.remove;
    state.orderDetails.protein = payload.item.protein;
    state.orderDetails.spice = payload.item.spice;
  },
  updateCartItem(state) {
    const id = state.itemToEditIndex;
    state.order.foodItems[id].protein = state.orderDetails.protein;
    state.order.foodItems[id].spice = state.orderDetails.spice;
    state.order.foodItems[id].add = state.orderDetails.add;
    state.order.foodItems[id].remove = state.orderDetails.remove;
  },
};
