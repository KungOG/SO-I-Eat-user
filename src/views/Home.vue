<template>
  <div class='home' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
    <div class='wrapper'>
      <!-- <header>
        <img :src="require('@/assets/icons/'+ Maps)" alt="" @click="test()">
        <img :src="require('@/assets/icons/'+ Logga)" alt="" @click="test()">
        <img :src="require('@/assets/icons/'+ Info)" alt="" @click="test()">
      </header> -->
      <footer>
        <img :src="require('@/assets/icons/'+ Arrow)" alt="" @click="test()">
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      Logga: 'logga.svg',
      Maps: 'Maps.svg',
      Info: 'Info.svg',
      Arrow: 'Arrow.svg',
    };
  },
  methods: {
    test() {
      console.log('click');
    },

    getImgUrl() {
      return require('@/assets/images/background.png');
    },
  },
};
</script>
