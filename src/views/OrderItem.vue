<template>
  <div>
    <menu-card 
      v-if="!showCart"
      :item="item"
      :displayIcons="displayIcons"
      :selectedCard="1"
      :index="1"
      ref="form"/>
    <menu-footer
      class="mobile"
      :text="showCart ? {text: 'Till betalning'} : { text: 'Lägg till i beställning', sum: 0 }"
      @click.native="cartEvents"/>
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
  }),
  computed: {
    item() {
      return this.$store.getters.getOrderItem(this.$route.params.id);
    },
  },
  beforeMount() {
    this.$route.params.id === 'varukorg' ? this.showCart = true : this.showCart = false;
  },
  methods: {
    cartEvents() {
      this.showCart ? this.toPayment() : this.addToCart();
    },
    addToCart() {
      this.$refs.form.addItemToCart();
      this.$router.push('/order');
    },
    toPayment() {
      console.log('till betalning');
    },
  },
};
</script>
