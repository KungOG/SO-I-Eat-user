import axios from 'axios';

export default {
  getMenuItems(ctx) {
    const url = 'https://so-i-eat-server.herokuapp.com/products';
    axios
      .get(url)
      .then((response) => {
        ctx.commit('setMenuItems', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getCategories(ctx) {
    const url = 'https://so-i-eat-server.herokuapp.com/categories';
    axios
      .get(url)
      .then((response) => {
        ctx.commit('setCategories', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  postOrder(ctx) {
    const url = 'https://so-i-eat-server.herokuapp.com/orders';
    axios
      .post(url, this.state.order)
      .catch((error) => {
        console.log(error);
      });
  },
  setOrderItemsFood(ctx, payload) {
    const orderItem = {
      productNr: payload.items2.productNr,
      productName: payload.items2.productName,
      protein: payload.items1.protein,
      spice: payload.items1.spice,
      price: payload.items2.price,
      add: payload.items1.add,
      remove: payload.items1.remove,
    };
    ctx.commit('setOrderItemsFood', orderItem);
  },
  setOrderItemsDrink(ctx, payload) {
    const orderItem = {
      productNr: payload.productNr,
      productName: payload.productName,
      protein: payload.protein,
      spice: payload.spice,
      price: payload.price,
      add: [],
      remove: [],
    };
    ctx.commit('setOrderItemsDrink', orderItem);
  },
};
