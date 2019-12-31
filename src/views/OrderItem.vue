<template>
  <div>
    <menu-card
      v-if="!showCart"
      :item="item"
      :displayIcons="displayIcons"
      :selectedCard="1"
      :index="1"
      ref="form"
    />
    <menu-footer
      class="mobile"
      :text="showCart ?
      {text: 'Till betalning'} : { text: 'Lägg till i beställning', text2: 'Uppdatera', sum: 0 }"
      @click.native="cartEvents"
    />
    <transition name="modal">
      <modal v-if="showTextModal" :showAbort="showAbort" >
        <h5>{{modalText}}</h5>
      </modal>
    </transition>
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
    displayIcons: false,
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
    editCart() {
      return this.$store.state.editCart;
    },
    showCart() {
      return this.$store.state.showCart;
    },
    orderData() {
      return this.$store.state.orderDetails;
    },
  },
  beforeMount() {
    this.$route.params.id === 'cart' ? this.$store.commit('setShowCart', true) : this.$store.commit('setShowCart', false);
  },
  methods: {
    cartEvents() {
      if (this.showCart) {
        this.toPayment();
      } else if (this.editCart) {
        this.$store.commit('setShowCart', true);
        this.$store.commit('editCart', false);
        this.$store.commit('updateCartItem');
        this.$store.commit('resetItemToEdit');
        this.$router.push('/orderitem/cart');
      } else {
        this.addFoodToCart();
      }
    },
    addFoodToCart() {
      this.$refs.form.addItemToCart();
    },
    toPayment() {
      this.$store.state.order.foodItems.length !== 0 || this.$store.state.order.drinkItems.length !== 0 ? this.$store.commit('setShowPayment', true) : '';
    },
  },
};
</script>

<style lang="scss">
  .modal-enter-active, .modal-leave-active {
    transition: all .3s ease;
  }
  
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
</style>
