export default {
  setMenuItems(state, menuItems) {
    state.menuItems = menuItems;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
  setOrderItems(state, orderItems) {
    state.order.items.push(orderItems);
  },
  deleteOrderItem(state, orderItem) {
    state.order.items.splice(orderItem, 1);
  },
};
