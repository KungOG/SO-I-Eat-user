export default {
    getOrderItem (state) {
        return (id) => {
          return state.menuItems.filter(
            item => item.id == id
          )[0]
        }
      },
};
