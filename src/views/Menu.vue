<template>
    <div class='menu'>
      <MenuHeader />
      <MenuSection v-for="(category, i) in categories" :key="i" :items="menuItems" :category="category"/>
      <MenuFooter />
    </div>
</template>
<script>
import MenuHeader from '@/components/MenuComponents/MenuHeader.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import MenuSection from '@/components/MenuComponents/MenuSection.vue';

export default {
  name: 'menu',
  components: {
    MenuHeader,
    MenuFooter,
    MenuSection,
  },
  beforeMount () {
    this.$store.dispatch('getMenuItems')
  },
  data () {
    return {
      categories: ['Förrätter', 'Varmrätter', 'Dessert']
    }
  },
  computed: {
    menuItems () {
      return this.$store.state.menuItems;
    },
  },
};
</script>
