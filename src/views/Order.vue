<template>
    <div class='order'>
      <scroll-navigation class="mobile" :categories="categories" v-model="selected"/>
      <div v-for="(item, i) in menuItems" :key="i">
        <menu-card :displayIcons="displayIcons" :item="item"/>
      </div>
      <menu-footer/>
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
