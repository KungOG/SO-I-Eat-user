<template>
  <div class='home'>
    <div class='wrapper' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <NavigationBar class="mobile"/>
      <section class="navigation-container">
        <NavigationButton :imageSrc="TakeAway.url" :title="TakeAway.text"/>
        <NavigationButton :imageSrc="MenuIcon.url" :title="MenuIcon.text"/>
        <NavigationButton :imageSrc="EatHere.url" :title="EatHere.text" class="mobile"/>
        <NavigationButton :imageSrc="Maps.url" :title="Maps.text" class="desktop"/>
      </section>
      <div class='golden-arrow'>
        <img :src="Arrow" alt="" @click="test()">
      </div>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from './Menu.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'home',
  components: {
    Menu,
    NavigationBar,
    NavigationButton,
  },
  data: () => ({
    TakeAway: {url: require('@/assets/icons/TakeAway.svg'), text: 'Ta med'},
    MenuIcon: {url: require('@/assets/icons/MenuIcon.svg'), text: 'Se Menyn'} ,
    Maps: {url: require('@/assets/icons/Maps.svg'), text: 'Hitta hit'},
    EatHere: {url: require('@/assets/icons/EatHere.svg'), text: 'Äta här'},
    Arrow: require('@/assets/icons/Arrow.svg'),
  }),
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
