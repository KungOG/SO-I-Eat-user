<template>
    <div class='order'>
      <scroll-navigation class="mobile" :categories="categories" @setSelected="setSelected"/>
      <side-navigation class="desktop" :categories="categories" @setSelected="setSelected" @setSelectedCard="setSelectedCard"/>
      <div class="card-wrapper">
        <div v-for="(item, i) in filteredMenuitems" :key="`filtered-menu-items-${i}`" v-show="selected !== 7">
          <menu-card
            class="mobile"
            :displayIcons="displayIcons"
            :item="item"
            :selectedCard="selectedCard"
            :index="i"
            @click.native="routeToOrderItem(item.productName, i)"
          />
          <menu-card
            class="desktop"
            :displayIcons="displayIcons"
            :item="item"
            :selectedCard="selectedCard"
            :index="i"
            @setSelectedCard="setSelectedCard"
          />
        </div>
        <drink-card
          v-show="selected === 7"
          v-for="drink in drinks"
          :key="`dink-card-${drink.productNr}`"
          :drink="drink"
        />    
      </div>
      <menu-footer @click.native="$router.push('/orderitem/varukorg')" :text="footerText" class="mobile"/>
      <cart class="desktop"/>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import ScrollNavigation from '@/components/MenuComponents/ScrollNavigation.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import SideNavigation from '@/components/SideNavigation.vue';
import Cart from '@/components/MenuComponents/Cart.vue';
import DrinkCard from '@/components/MenuComponents/DrinkCard.vue';

export default {
  name: 'order',
  components: {
    MenuCard,
    ScrollNavigation,
    SideNavigation,
    MenuFooter,
    Cart,
    DrinkCard,
  },
  data: () => ({
    selected: 0,
    displayIcons: false,
    selectedCard: -1,
    footerText: {text: 'min beställning'},
  }),
  beforeMount() {
    this.$store.dispatch('getMenuItems');
    this.$store.dispatch('getCategories');
  },
  computed: {
    sortedMenuItems() {
      return this.$store.getters.sortedMenuItems;
    },
    drinks() {
      return this.sortedMenuItems.filter((item) => item.category === 7).reverse();
    },
    filteredMenuitems() {
      return this.sortedMenuItems.filter((item) => item.category === this.selected).reverse();
    },
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    routeToOrderItem(id, i) {
      this.selectedCard = i;
      this.$router.push(`orderitem/${id}`);
    },
    setSelected(i) {
      this.selected = i;
    },
    setSelectedCard(i) {
      this.selectedCard = i;
    },
  },
};
</script>
