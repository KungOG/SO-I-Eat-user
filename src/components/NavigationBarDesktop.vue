<template>
  <div class="nav-desk-container">
    <div class="nav-item">
      <img :src="require('@/assets/icons/FullLogo.svg')" @click="scrollTo('home')" />
    </div>
    <div class="nav-item">
      <transition name="info">
        <div class="info-menu" v-if="showInfoMenu">
          <span @click="scrollTo('contact')">Kontakt</span>
          <span @click="scrollTo('about')">Om oss</span>
          <span>Villkor</span>
        </div>
      </transition>
      <img :src="require('@/assets/icons/Info.svg')" @click="showInfoMenu = !showInfoMenu" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showInfoMenu: false,
  }),
  methods: {
    scrollTo(here) {
      this.$nextTick(() => document.getElementById(here).scrollIntoView({ behavior: 'smooth' }));
    },
  },
};
</script>
