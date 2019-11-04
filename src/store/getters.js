export default {
    getOrderItem (state) {
      return (name) => {
        return state.menuItems.filter(
          item => item.productName == name
        )[0]
      }
    },
    sortedMenuItems(state) {
      return state.menuItems.sort((a, b) => (a.category > b.category) ? 1 : -1)
    }
};