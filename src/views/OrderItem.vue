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
    <modal v-if="showTextModal" :showAbort="showAbort" >
      <h5>{{modalText}}</h5>
    </modal>
    <Cart v-if="showCart" />
  </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import Cart from '@/components/MenuComponents/Cart.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    MenuCard,
    MenuFooter,
    Cart,
    Modal,
  },
  data: () => ({
    showCart: null,
    displayIcons: false,
    showAbort: false,

  }),
  computed: {
    item() {
      return this.$store.getters.getOrderItem(this.$route.params.id);
    },
    modalText() {
      return this.$store.state.modalText;
    },
    showTextModal() {
      return this.$store.state.showTextModal;
    },
  },
  beforeMount() {
    this.$route.params.id === 'varukorg' ? this.showCart = true : this.showCart = false;
  },
  methods: {
    cartEvents() {
      this.showCart ? this.toPayment() : this.addFoodToCart();
    },
    addFoodToCart() {
      this.$refs.form.addItemToCart();
      //this.$router.push('/order');
    },
    toPayment() {
      this.$store.dispatch('postOrder');
      console.log('skickat')
    },
  },
};
</script>
