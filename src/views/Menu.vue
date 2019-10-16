<template>
    <div class='menu'>
      <MenuHeader />
      <div class="sections-wrapper">
        <MenuSection v-for="(category, i) in categories" :key="i" :items="menuItems" :category="category"/>
      </div>
      <MenuFooter />
      <NavigationButton :imageSrc="TakeAway" :title="TakeAwayText"/>
      <NavigationButton :imageSrc="MenuIcon" :title="MenuIconText"/>
      <NavigationButton :imageSrc="Maps" :title="MapsText"/>
      <NavigationButton :imageSrc="EatHere" :title="EatHereText"/>
    </div>
</template>
<script>
import MenuHeader from '@/components/MenuComponents/MenuHeader.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import MenuSection from '@/components/MenuComponents/MenuSection.vue';
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'menu',
  data() {
    return {
      TakeAway: require('@/assets/icons/TakeAway.svg'),
      TakeAwayText: 'Ta med',
      MenuIcon: require('@/assets/icons/MenuIcon.svg'),
      MenuIconText: 'Se Menyn',
      Maps: require('@/assets/icons/Maps.svg'),
      MapsText: 'Hitta hit',
      EatHere: require('@/assets/icons/EatHere.svg'),
      EatHereText: 'Äta här',
      categories: ['Förrätter', 'Varmrätter', 'Soppor', 'Dessert']
    }
  },
  components: {
    MenuHeader,
    MenuFooter,
    MenuSection,
    NavigationButton,
  },
  beforeMount () {
    this.$store.dispatch('getMenuItems')
  },
  computed: {
    menuItems () {
      return this.$store.state.menuItems;
    },
  },
};
</script>
