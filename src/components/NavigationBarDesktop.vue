<template>
  <div class="nav-desk-container">
    <div class="nav-item">
      <img :src="require('@/assets/icons/FullLogo.svg')" @click="scroll()" />
    </div>
    <div class="nav-item">
      <div class="info-menu" v-if="showInfoMenu">
        <span>Kontakt</span>
        <span>Om oss</span>
        <span>Villkor</span>
      </div>
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
    scroll() {

    },
  },
};
</script>