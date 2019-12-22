<template>
  <div class='menu-footer' >
    <h5 v-if="!editCart">{{text.text}}</h5>
    <h5 v-else>{{text.text2}}</h5>
    <h5 v-if="this.text.sum">{{text.sum}}:-</h5>
    <div v-if="!editCart" class="cart-icon-wrapper">
      <img :src="require('@/assets/icons/' + imgUrl)" alt="Välj">
      <div class="cart-content">
        <span>{{numberOfCartItems}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-footer',
  props: {
    text: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    imgUrl: 'Cart.svg',
  }),
  computed: {
    editCart() {
      return this.$store.state.editCart;
    },
    numberOfCartItems() {
      return this.$store.state.order.foodItems.length + this.$store.state.order.drinkItems.length;
    },
  },
};
</script>

<style lang="scss">
  .menu-footer {
    height: 60px;
    background: #AA0909;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    bottom: 0;
    width: 100%;

    >.cart-icon-wrapper {
      position: relative;

      >img {
        margin-left: 20px;
      }

      >.cart-content {
        height: 20px;
        width: 20px;
        border-radius: 999px;
        background: white;
        position: absolute;
        top: 3px;
        left: 50px;
        color: black;
        text-align: center;
      }
    }
  }
</style>
