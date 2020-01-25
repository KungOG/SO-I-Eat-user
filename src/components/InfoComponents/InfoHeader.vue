<template>
  <div class='info-header'>
    <div class='icon-one'>x</div>
    <div class='icon-two' :class="showBurgerNav ? '-active' : ''" @click="showBurger">C</div>
    <div class='burger-menu' :class="showBurgerNav ? '-active' : ''">
      <div class='burger-container'>
        <div @click="showBurger">X</div>
        <span>About</span>
        <span>Contact</span>
        <span>Terms</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info-header',
  data: () => ({
    showBurgerNav: false,
  }),
  methods: {
    showBurger() {
      console.log(this.showBurgerNav);
      this.showBurgerNav = !this.showBurgerNav;
    },
  },
};
</script>
