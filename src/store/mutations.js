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
  setLeaveCommentModal(state, boolean) {
    state.leaveComment = boolean;
  },
  setSaveComment(state, string) {
    state.comment = string;
  },
  deleteOrderItemFood(state, orderItem) {
    state.order.foodItems.splice(orderItem, 1);
  },
  deleteOrderItemDrink(state, orderItem) {
    state.order.drinkItems.splice(orderItem, 1);
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
  setShowPayment(state, boolean) {
    state.showPayment = boolean;
  },
  setProductionTime(state, time) {
    state.productionTime = time;
  },
  setShowProductionTime(state, boolean) {
    state.showProductionTime = boolean;
  },
  setProtein(state, protein) {
    state.orderDetails.protein = protein;
  },
  setSpice(state, spice) {
    state.orderDetails.spice = spice;
  },
  setStatus(state, status) {
    state.status = status;
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
    const index = add.findIndex(x => x.name === option.name)
    index !== -1 ? add.splice(index, 1) : add.push(option)
  },
  resetOrderDetails(state) {
    state.orderDetails = {
      protein: '',
      spice: null,
      add: [],
      remove: [],
    };
  },
  resetOrder(state) {
    state.order.foodItems.length = 0;
    state.order.drinkItems.length = 0;
    state.table = '';
    state.comment = null;
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
  toggleActiveCart(state, boolean) {
    state.showTheCart = boolean;
  },
};
