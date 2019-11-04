<template>
    <div class='order'>
      <scroll-navigation class="mobile" :categories="categories" @setSelected="setSelected"/>
      <side-navigation class="desktop" :categories="categories" @setSelected="setSelected"/>
      <div class="card-wrapper">
        <div v-for="(item, i) in filteredMenuitems" :key="`filtered-menu-items-${i}`">
          <menu-card
            class="mobile"
            :displayIcons="displayIcons"
            :item="item"
            :selectedCard="selectedCard"
            :index="i"
            @click.native="routeToOrderItem(item.productName, i)"/>
          <menu-card
            class="desktop"
            :displayIcons="displayIcons"
            :item="item"
            :selectedCard="selectedCard"
            :index="i"
            @setSelectedCard="setSelectedCard"/>
        </div>
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

export default {
  name: 'order',
  components: {
    MenuCard,
    ScrollNavigation,
    SideNavigation,
    MenuFooter,
    Cart
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
