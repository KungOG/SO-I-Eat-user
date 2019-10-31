<template>
    <div class='menu-footer' >
      <h5>{{text.text}}</h5>
      <h5 v-if="this.text.sum">{{text.sum}}:-</h5>
      <img :src="require('@/assets/icons/' + imgUrl)" alt="Välj">
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
  data() {
    return {
      imgUrl: 'Menu.svg',
    };
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
  }
</style>
