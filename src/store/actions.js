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
  getAddOns(ctx) {
    const url = 'https://so-i-eat-server.herokuapp.com/addons';
    axios
      .get(url)
      .then((response) => {
        ctx.commit('setAddOns', response.data);
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
    const postOrder = { order: this.state.order, comment: this.state.comment };
    const url = 'https://so-i-eat-server.herokuapp.com/orders';
    axios
      .post(url, postOrder)
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
      _id: payload._id,
      status: 0,
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
      _id: payload._id,
      status: false,
      protein: payload.protein,
      spice: payload.spice,
      price: payload.price,
      add: [],
      remove: [],
    };
    ctx.commit('setOrderItemsDrink', orderItem);
  },
  getProductionTime(ctx) {
    const url = 'https://so-i-eat-server.herokuapp.com/deliveryTimes';
    axios
      .get(url)
      .then((response) => {
        ctx.commit('setProductionTime', response.data[0].time);
        ctx.commit('setShowProductionTime', true);
        setTimeout(() => {
          ctx.commit('setShowProductionTime', false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
