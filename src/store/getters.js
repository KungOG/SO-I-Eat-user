export default {
  getOrderItem(state) {
    return name => state.menuItems.filter(
      item => item.productName === name,
    )[0];
  },
  sortedMenuItems(state) {
    return state.menuItems.sort((a, b) => ((a.category > b.category) ? 1 : -1));
  },
  getOriginalMenuItem(state) {
    if (state.itemToEdit !== null) {
      return state.menuItems.find(x => x.productName === state.itemToEdit.productName);
    }
    return [];
  },
  getLunchItem(state) {
    const menuItems = [...state.menuItems];
    return menuItems.splice(menuItems.findIndex(x => x.productNr === 'L1'), 1);
  }
};
