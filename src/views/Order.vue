<template>
    <div class='order'>
      <scroll-navigation class="mobile" :categories="categories" v-model="selected"/>
      <side-navigation class="desktop" :categories="categories"/>
      <div class="card-wrapper">
        <div v-for="(item, i) in menuItems" :key="i">
          <menu-card
            class="mobile"
            :displayIcons="displayIcons"
            :item="item"
            :selectedCard="selectedCard"
            :index="i"
            @click.native="routeToOrderItem(item.id, i)"/>
          <menu-card
            class="desktop"
            :displayIcons="displayIcons"
            :item="item"
            :selectedCard="selectedCard"
            :index="i"
            @click.native="selectedCard = i"/>
        </div>
      </div>
      <menu-footer @click.native="$router.push('/orderitem/0')" :text="footerText" class="mobile"/>
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
    selected: null,
    displayIcons: false,
    selectedCard: -1,
    footerText: {text: 'min beställning'},
  }),
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
  },
  methods: {
    routeToOrderItem(id, i) {
      this.selectedCard = i;
      this.$router.push(`orderitem/${id}`);
    },
  },
};
</script>
