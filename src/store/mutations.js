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
};
