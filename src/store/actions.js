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
  getBusinessHours(ctx) {
    const url = 'https://so-i-eat-server.herokuapp.com/businessHours';
    axios
      .get(url)
      .then((response) => {
        ctx.commit('setBusinessHours', response.data);
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
    const add = this.state.orderDetails.add.map(x => x);
    const remove = this.state.orderDetails.remove.map(x => x);

    const orderItem = {
      productNr: payload.productNr,
      productName: payload.productName,
      protein: this.state.orderDetails.protein,
      spice: this.state.orderDetails.spice,
      price: payload.price,
      add,
      remove,
    };
    ctx.commit('setOrderItemsFood', orderItem);
    ctx.commit('resetOrderDetails');
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
