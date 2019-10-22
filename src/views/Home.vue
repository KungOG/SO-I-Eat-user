<template>
  <div class='home'>
    <div class='wrapper' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    getImgUrl() {
      return require('@/assets/images/background.png')
    },
  },
};
</script>
