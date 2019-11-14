<template>
  <div class='home'>
    <div class='wrapper' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <NavigationBar class="mobile"/>
      <div class='golden-arrow'>
        <img :src="require('@/assets/icons/'+ Arrow)" alt="" @click="test()">
      </div>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from './Menu.vue';
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  name: 'home',
  components: {
    Menu,
    NavigationBar
  },
  data () {
    return {
      Logga: 'logga.svg',
      Maps: 'Maps.svg',
      Info: 'Info.svg',
      Arrow: 'Arrow.svg',
    }
  },
  methods: {
    test () {
      console.log('click');
    },

    getImgUrl() {
      return require('@/assets/images/background.png')
    },
  },
};
</script>
