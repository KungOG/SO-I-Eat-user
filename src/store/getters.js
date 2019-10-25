export default {
    getOrderItem (state) {
      return (id) => {
        return state.menuItems.filter(
          item => item.id == id
        )[0]
      }
    },
    sortedMenuItems(state) {
      return state.menuItems.sort((a, b) => (a.category > b.category) ? 1 : -1)
    }
};