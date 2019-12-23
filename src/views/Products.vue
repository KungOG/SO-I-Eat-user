<template>
    <div class='products' id="prod">
      <NavigationBar class="nav-bar-products mobile black" :class="{ 'navbar--hidden': !showNavbar2 }"/>
      <NavigationBarDesktop class="nav-bar-desktop desktop black" :class="{ 'navbar--hidden': !showNavbar2 }"/>
      <div class="sections-wrapper mobile">
        <Lunch class="lunch-component"/>
        <MenuSection
          v-for="(category, i) in categories"
          :key="`categories-${i}`"
          :items="menuItems"
          :category="category"
        />
      </div>
      <div class="sections-wrapper desktop">
        <section>
          <Lunch class="lunch-component"/>
          <MenuSection
            v-for="(category, i) in splittedCategories.array1"
            :key="`split-categories1-${i}`"
            :items="menuItems"
            :category="category"
          />
        </section>
        <section>
          <MenuSection
            v-for="(category, i) in splittedCategories.array2"
            :key="`split-categories2-${i}`"
            :items="menuItems"
            :category="category"
          />
        </section>
      </div>
      <div class="nav-buttons mobile" :class="{ 'navbar--hidden': !showNavbar }">
        <NavigationButton class="nav-mobile" :imageSrc="TakeAway" :title="TakeAwayText" url="/order"/>
        <NavigationButton class="nav-mobile" :imageSrc="EatHere" :title="EatHereText" url="/order"/>
      </div>
      <div class="nav-buttons desktop">
        <NavigationButton :imageSrc="TakeAway" :title="TakeAwayText" url="/order"/>
        <NavigationButton :imageSrc="Menu" :title="MenuText" url="/order"/>
        <NavigationButton :imageSrc="Maps" :title="MapsText" url="/"/>
      </div>
    </div>
</template>

<script>
import MenuSection from '@/components/MenuComponents/MenuSection.vue';
import Lunch from '@/components/MenuComponents/Lunch.vue';
import NavigationButton from '@/components/NavigationButton.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationBarDesktop from '@/components/NavigationBarDesktop.vue';

export default {
  name: 'products',
  data: () => ({
      TakeAway: require('@/assets/icons/TakeAway.svg'),
      TakeAwayText: 'ta med',
      Menu: require('@/assets/icons/Menu.svg'),
      MenuText: 'se menyn',
      Maps: require('@/assets/icons/Maps.svg'),
      MapsText: 'hitta hit',
      EatHere: require('@/assets/icons/EatHere.svg'),
      EatHereText: 'äta här',
      showNavbar: true,
      showNavbar2: true,
      lastScrollPosition: 0,
  }),
  components: {
    MenuSection,
    NavigationButton,
    Lunch,
    NavigationBar,
    NavigationBarDesktop,
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
      return this.$store.state.menuItems.filter(x => x.category !== 7);
    },
    categories() {
      return this.$store.state.categories.filter(x => x.categoryId !== 7 );
    },
    splittedCategories() {
      var items = this.$store.state.categories.map(x => x).filter(x => x.categoryId !== 7);
      var originalArray = this.$store.state.categories.filter(x => x.categoryId !== 7);
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
    },
  },
};
</script>
