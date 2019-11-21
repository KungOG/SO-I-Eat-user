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
  setRemovedIngredients(state, ingredient) {
    const remove = state.orderDetails.remove;
    remove.includes(ingredient) ? remove.splice(remove.indexOf(ingredient), 1) : remove.push(ingredient);
  },
  setAddedOption(state, option) {
    const add = state.orderDetails.add
    add.includes(option) ? add.splice(add.indexOf(option), 1) : add.push(option);
  },
  resetOrderDetails(state) {
    state.orderDetails = {
      protein: '',
      spice: null,
      add: [],
      remove: [],
    }
  },
  resetItemToEdit(state) {
    state.itemToEdit = null;
  },
  editCart(state, boolean) {
    state.editCart = boolean;
  },
  setItemToEdit(state, item) {
    state.itemToEdit = item;
  },
};
