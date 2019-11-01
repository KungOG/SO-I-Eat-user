import axios from 'axios'

export default {
   getMenuItems (ctx) {
    const url = 'http://localhost:3000/products';
      axios
    .get(url)
    .then(response => {
      ctx.commit('setMenuItems', response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },
   getCategories(ctx) {
    const url = 'http://localhost:3000/categories';
      axios
    .get(url)
    .then(response => {
      ctx.commit('setCategories', response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
};
