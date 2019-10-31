<template>
  <div>
    <menu-card v-if="!showCart" :item="item" :displayIcons="displayIcons" :selectedCard="1" :index="1"/>
    <menu-footer @click.native="$router.push('/order')" :text="footerText" class="mobile"/>
    <Cart v-if="showCart" />
  </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import Cart from '@/components/MenuComponents/Cart.vue';

export default {
  components: {
    MenuCard,
    MenuFooter,
    Cart,
  },
  data: () => ({
    showCart: null,
    displayIcons: false,
    footerText: { text: 'lägg till i beställning', sum: 0 },
  }),
  computed: {
    item() {
      return this.$store.getters.getOrderItem(this.$route.params.id);
    },
  },
  beforeMount() {
    this.$route.params.id == 0 ? this.showCart = true : this.showCart = false;
  },
};
</script>
