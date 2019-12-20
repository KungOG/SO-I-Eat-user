<template>
    <div class='products'>
      <div class="sections-wrapper mobile">
        <Lunch />
        <MenuSection v-for="(category, i) in categories" :key="`categories-${i}`" :items="menuItems" :category="category"/>
      </div>
      <div class="sections-wrapper desktop">
        <section>
          <Lunch />
          <MenuSection v-for="(category, i) in splittedCategories.array1" :key="`split-categories1-${i}`" :items="menuItems" :category="category"/>
        </section>
        <section>
          <MenuSection v-for="(category, i) in splittedCategories.array2" :key="`split-categories2-${i}`" :items="menuItems" :category="category"/>
        </section>
      </div>
      <NavigationButton :imageSrc="TakeAway" :title="TakeAwayText"/>
      <NavigationButton :imageSrc="MenuIcon" :title="MenuIconText"/>
      <NavigationButton :imageSrc="Maps" :title="MapsText"/>
      <NavigationButton :imageSrc="EatHere" :title="EatHereText"/>
    </div>
</template>

<script>
import MenuSection from '@/components/MenuComponents/MenuSection.vue';
import Lunch from '@/components/MenuComponents/Lunch.vue';
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'products',
  data: () => ({
      TakeAway: require('@/assets/icons/TakeAway.svg'),
      TakeAwayText: 'Ta med',
      MenuIcon: require('@/assets/icons/MenuIcon.svg'),
      MenuIconText: 'Se Menyn',
      Maps: require('@/assets/icons/Maps.svg'),
      MapsText: 'Hitta hit',
      EatHere: require('@/assets/icons/EatHere.svg'),
      EatHereText: 'Äta här',
  }),
  components: {
    MenuSection,
    NavigationButton,
    Lunch,
  },
  beforeMount() {
    this.$store.dispatch('getMenuItems');
    this.$store.dispatch('getCategories');
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    categories() {
      return this.$store.state.categories;
    },
    splittedCategories() {
      var items = this.$store.state.categories.map(x => x);
      var originalArray = this.$store.state.categories;
      var arrays = {array1: [], array2: []}

      for(let i=0; i < originalArray.length; i++) {
        items.length % 2 == 0 ? arrays.array1.push(items.shift()) : arrays.array2.push(items.shift())
      }
      return arrays
    }
  },
};
</script>
