export default {
  getMenuItems () {
    const url = 'https://my-json-server.typicode.com/kungog/mockserver';
      var menuItems =
      axios
    .get(url)
    .then(response => (this.info = response))
  }
};
