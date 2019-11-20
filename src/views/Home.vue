<template>
  <div class='home'>
    <div class='wrapper' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <NavigationBar class="mobile"/>
      <section class="navigation-container">
        <NavigationButton :imageSrc="TakeAway" :title="TakeAwayText"/>
        <NavigationButton :imageSrc="MenuIcon" :title="MenuIconText"/>
        <NavigationButton :imageSrc="EatHere" :title="EatHereText" class="mobile"/>
        <NavigationButton :imageSrc="Maps" :title="MapsText" class="desktop"/>
      </section>
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
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'home',
  components: {
    Menu,
    NavigationBar,
    NavigationButton,
  },
  data: () => ({
    TakeAway: require('@/assets/icons/TakeAway.svg'),
    TakeAwayText: 'Ta med',
    MenuIcon: require('@/assets/icons/MenuIcon.svg'),
    MenuIconText: 'Se Menyn',
    Maps: require('@/assets/icons/Maps.svg'),
    MapsText: 'Hitta hit',
    EatHere: require('@/assets/icons/EatHere.svg'),
    EatHereText: 'Äta här',
    Logga: 'logga.svg',
    Maps: 'Maps.svg',
    Info: 'Info.svg',
    Arrow: 'Arrow.svg',
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
