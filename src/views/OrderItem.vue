<template>
  <div>
    <menu-card :item="item" :displayIcons="displayIcons" :selectedCard="1" :index="1"/>
    <menu-footer @click.native="showCart = !showCart" :text="footerText" class="mobile"/>
    <Cart :showCart="showCart" />
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
    showCart: false,
    displayIcons: false,
    footerText: {text: 'lägg till i beställning', sum: 0}
  }),
  computed: {
    item() {
      return this.$store.getters.getOrderItem(this.$route.params.id);
    },
  },
};
</script>
