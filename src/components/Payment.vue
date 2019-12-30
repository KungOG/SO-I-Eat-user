<template>
  <div class="payment">
    <div class="payment-background-overlay" @click="closePaymentModal" />
    <div class='payment-wrapper'>
      <form id="payment-form" class='payment-form'>
        <div class='payment-information'>
          <div class='payment-error'>
            <p class="stripeError"  v-if="stripeError">
              {{stripeError}}
            </p>
          </div>
          <div class='payment-card'>
            <div class="" id="card-element"></div>
          </div>
        </div>
        <div class='payment-buttons'>
          <button id='submit-button' @click.prevent="submitPayment()">
            <div class="spinner hidden" id="spinner"></div>
            <span class='button-text'>Betala</span>
          </button>
          <button id='reset-button' @click.prevent="reset()">
            <span class='button-text'>Återställ</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#AA0909',
    iconColor: '#AA0909',
  },
};

export default {
  data: () => ({
    orderData: {
      items: [{ id: "photo-subscription" }],
      // items: [this.totalAmount],
      currency: 'sek',
    },
    clientSecret: '',
    card: null,
    stripe: null,
    stripeError: '',
    cardError: '',
    cardEvent: null,
    loading: false,
  }),
  /* props: {
    totalAmount: {
      type: Number,
    },
  }, */
  mounted() {
    this.createPaymentIntent();
  },
  methods: {
    createPaymentIntent() {
      const url = 'https://so-i-eat-server.herokuapp.com/create-payment-intent';
      axios
      .post(url, this.orderData, { headers: { ContentType: 'application/json' } })
      .then((response) => {
        this.clientSecret = response.data.clientSecret;
        this.setUpStripe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    setUpStripe(data) {
      if (window.Stripe === undefined) {
        alert('Stripe not loaded!');
      } else {
        const stripe = window.Stripe(data.publishableKey);
        this.stripe = stripe;
        const elements = stripe.elements();
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.listenForErrors();
      }
    },
    listenForErrors() {
      const vm = this;
      this.card.addEventListener('change', (event) => {
        vm.toggleError(event);
        vm.cardError = '';
        vm.cardEvent = event.complete ? true : false;
      });
    },
    toggleError(event) {
      if (event.error) {
        this.stripeError = event.error.message;
      } else {
        this.stripeError = '';
      }
    },
    submitPayment() {
      this.stripe.confirmCardPayment(this.clientSecret, {
        payment_method: { card: this.card },
      }).then((result) => {
        if (result.error) {
          this.stripeError = result.error.message;
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            console.log('betalningen gick igenom');
            this.sendOrder();
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
          }
        }
      });
    },
    async sendOrder() {
      await this.$store.dispatch('postOrder');
      this.$router.push('/confirmation');
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
    },
  },
};
</script>
