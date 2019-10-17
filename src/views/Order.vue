<template>
    <div class='order'>
      <scroll-navigation class="mobile" :categories="categories" v-model="selected"/>
      <menu-card v-for="(item, i) in menuItems" :displayIcons="displayIcons" :key="i" :item="item"/>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import ScrollNavigation from '@/components/MenuComponents/ScrollNavigation.vue';

export default {
  name: 'order',
  components: {
    MenuCard,
    ScrollNavigation,
  },
  data: () => ({
    selected: null,
    categories: ['förrätter', 'soppor', 'varmrätter', 'dessert', 'nudlar', 'barnrätter', 'dryck', 'lunch'],
    displayIcons: false,
  }),
  beforeMount () {
    this.$store.dispatch('getMenuItems')
  },
  computed: {
    menuItems () {
      return this.$store.state.menuItems;
    },
}
}
</script>
