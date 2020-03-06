<template>
  <div class="payment">
    <div class="payment-background-overlay" @click="closePaymentModal" />
    <img class="modal-cross-icon" :src="closeDown" />

    <div class="payment-wrapper">
      <form id="payment-form" class="payment-form">
        <div class="payment-information">
          <div class="payment-error">
            <p class="stripe-error" v-if="stripeError">{{stripeError}}</p>
          </div>
          <div class="payment-card">
            <div class id="card-element"></div>
          </div>
        </div>
        <div class="payment-buttons">
          <button id="submit-button" :class="{ disabled: disabled }" @click.prevent="submitPayment()">
            <Loader :enabled="loading" />
            <span v-if="!loading" class="button-text">Betala</span>
          </button>
          <button id="reset-button" @click.prevent="reset()">
            <span class="button-text">Återställ</span>
          </button>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import CloseDown from '@/assets/icons/WhiteCross.svg';
import Loader from './Loader'

const style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: "#aab7c4"
    }
  },
  invalid: {
    color: '#AA0909',
    iconColor: '#AA0909'
  }
};

export default {
  data: () => ({
    closeDown: CloseDown,
    clientSecret: '',
    card: null,
    stripe: null,
    stripeError: '',
    cardError: '',
    cardEvent: null,
    loading: false,
    disabled: true,
  }),
  components: {
    Loader,
  },
  mounted() {
    this.createPaymentIntent();
  },
  computed: {
    email() {
      return this.$store.state.email;
    },
    itemsId() {
      const { order } = this.$store.state;
      const allAddOns = order.foodItems.map(x => x.add).flat();
      const foodId = order.foodItems.map(x => x._id);
      const drinkId = order.drinkItems.map(x => x._id);

      const addOnIds = allAddOns.map(item => item._id)
      console.log(addOnIds)
      return [...drinkId, ...foodId, ...addOnIds];
    },
  },
  methods: {
    createPaymentIntent() {
      this.loading = true;
      const url = 'https://so-i-eat-server.herokuapp.com/create-payment-intent';
      const orderData = { items: this.itemsId, currency: 'sek', email: this.email };
      axios
        .post(url, orderData, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } })
        .then((response) => {
          this.clientSecret = response.data.clientSecret;
          this.setUpStripe(response.data);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    setUpStripe(data) {
      if (window.Stripe === undefined) {
        this.commit('setShowPayment', false);
      } else {
        const stripe = window.Stripe(data.publishableKey);
        this.stripe = stripe;
        const elements = stripe.elements();
        this.card = elements.create('card', { style });
        this.card.mount('#card-element');
        this.disabled = true;
        this.listenForErrors();
      }
    },
    listenForErrors() {
      const vm = this;
      this.card.addEventListener('change', (event) => {
        vm.toggleError(event);
        vm.cardError = '';
        vm.cardEvent = !!event.complete;
      });
    },
    toggleError(event) {
      if (event.error) {
        this.stripeError = event.error.message;
        this.disabled = true
      } else {
        this.stripeError = '';
        this.disabled = false
      }
    },
    submitPayment() {
      this.loading = true;
      this.stripe
        .confirmCardPayment(this.clientSecret, {
          payment_method: { card: this.card },
        })
        .then((result) => {
          if (result.error) {
            this.stripeError = result.error.message;
            this.loading = false;
          } else if (result.paymentIntent.status === 'succeeded') {
            this.loading = false;
            this.sendOrder();
          }
        });
    },
    async sendOrder() {
      await this.$store.dispatch('postOrder');
      this.$router.push('/confirmation');
      this.$store.commit('setShowPayment', false);
      this.$store.commit('toggleActiveCart', false);
      this.$store.commit('resetOrder');
    },
    clearElementsInputs() {
      this.card.clear();
    },
    clearCardErrors() {
      this.stripeError = '';
      this.cardError = '';
    },
    reset() {
      this.clearElementsInputs();
      this.clearCardErrors();
    },
    closePaymentModal() {
      this.$store.state.showPayment = false;
    }
  }
};
</script>
