<template>
    <div class='products'>
      <NavigationBar class="nav-bar-products mobile" :class="{ 'navbar--hidden': !showNavbar2 }"/>
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
      <div class="nav-buttons mobile" :class="{ 'navbar--hidden': !showNavbar }">
        <NavigationButton class="nav-mobile" :imageSrc="TakeAway" :title="TakeAwayText"/>
        <NavigationButton class="nav-mobile" :imageSrc="EatHere" :title="EatHereText"/>
      </div>
      <div class="nav-buttons desktop">
        <NavigationButton :imageSrc="TakeAway" :title="TakeAwayText"/>
        <NavigationButton :imageSrc="MenuIcon" :title="MenuIconText"/>
        <NavigationButton :imageSrc="Maps" :title="MapsText"/>
      </div>
    </div>
</template>

<script>
import MenuSection from '@/components/MenuComponents/MenuSection.vue';
import Lunch from '@/components/MenuComponents/Lunch.vue';
import NavigationButton from '@/components/NavigationButton.vue';
import NavigationBar from '@/components/NavigationBar.vue';

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
      showNavbar: true,
      showNavbar2: true,
      lastScrollPosition: 0,
  }),
  components: {
    MenuSection,
    NavigationButton,
    Lunch,
    NavigationBar,
  },
  beforeMount() {
    this.$store.dispatch('getMenuItems');
    this.$store.dispatch('getCategories');
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
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
      return arrays;
    }
  },
  methods: {
    onScroll () {
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 0) {
        return;
      }
      this.showNavbar = currentScrollPosition < 60;
      this.showNavbar2 = currentScrollPosition < h;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>
