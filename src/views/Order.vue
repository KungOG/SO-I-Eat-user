<template>
    <div class='order'>
      <scroll-navigation class="mobile" :categories="categories" v-model="selected"/>
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
      <menu-footer :text="footerText" class="mobile"/>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import ScrollNavigation from '@/components/MenuComponents/ScrollNavigation.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';

export default {
  name: 'order',
  components: {
    MenuCard,
    ScrollNavigation,
    MenuFooter,
  },
  data: () => ({
    selected: null,
    categories: ['förrätter', 'soppor', 'varmrätter', 'dessert', 'nudlar', 'barnrätter', 'dryck', 'lunch'],
    displayIcons: false,
    selectedCard: -1,
    footerText: {text: 'min beställning'},
  }),
  beforeMount() {
    this.$store.dispatch('getMenuItems');
  },
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
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
