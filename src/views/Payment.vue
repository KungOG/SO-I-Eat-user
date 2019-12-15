<template>
  <div class="payment">
    <form class="payment-form">

      <div class="">
        <p class="stripeError" v-if="stripeError">
          {{stripeError}}
        </p>
      </div>

      <div class="">
        <label class="" for="Card Number">
          Kortnummer
        </label>
        <div class="">
          <div id="card-number" class="" :class="{ '': cardNumberError }"></div>
          <span class="help-block" v-if="cardNumberError">
            {{cardNumberError}}
          </span>
        </div>
      </div>

      <div class="">
        <div class="">
          <label class="" for="Card CVC">
            CVC
          </label>
          <div class="">
            <div id="card-cvc" class="" :class="{ '': cardCvcError }"></div>
            <span class="" v-if="cardCvcError">
              {{cardCvcError}}
            </span>
          </div>
        </div>
        <div class="">
          <label class="" for="Expiry Month">
            Gäller till
          </label>
          <div class="">
            <div id="card-expiry" class="" :class="{ '': cardExpiryError }"></div>
            <span class="" v-if="cardExpiryError">
              {{cardExpiryError}}
            </span>
          </div>
        </div>
      </div>

      <div class="">
        <button class="" @click.prevent="reset()">
          reset
        </button>

        <button class="" @click.prevent="submitFormToSendPayment()">
          Betala
        </button>
      </div>

    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    card: {
      cvc: '',
      number: '',
      expiry: ''
    },
    orderData: {
      items: [{ id: "photo-subscription" }],
      currency: "sek"
    }, 

    clientSecret: '',

    //elements
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    stripe: null,

    // errors
    stripeError: '',
    cardCvcError: '',
    cardExpiryError: '',
    cardNumberError: '',

    loading: false,
  }),

  mounted() {
    this.createPaymentIntent();
    
  },

  methods: {
    createPaymentIntent() {
      const url = 'https://so-i-eat-server.herokuapp.com/create-payment-intent';
      axios
        .post(url, this.orderData, {
          headers: { ContentType: "application/json" }})
        .then((response) => {
          //ska få tillbaka publishable key och clientSecret
          console.log(response.data)
          this.clientSecret = data.clientSecret;
        })
        .then((data) => {
          console.log(data)
          this.setUpStripe(data);
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
          this.cardCvc = elements.create('cardCvc');
          this.cardExpiry = elements.create('cardExpiry');
          this.cardNumber = elements.create('cardNumber');

          this.cardCvc.mount('#card-cvc');
          this.cardExpiry.mount('#card-expiry');
          this.cardNumber.mount('#card-number');

          this.listenForErrors();
        }
      },

      listenForErrors() {
        const vm = this;

        this.cardNumber.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardNumberError = ''
          vm.card.number = event.complete ? true : false
        });
				
        this.cardExpiry.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardExpiryError = ''
          vm.card.expiry = event.complete ? true : false
        });
        
				this.cardCvc.addEventListener('change', (event) => {
          vm.toggleError(event);
          vm.cardCvcError = ''
          vm.card.cvc = event.complete ? true : false
        });
      },

      toggleError (event) {
        if (event.error) {
          this.stripeError = event.error.message;
        } else {
          this.stripeError = '';
        }
      },

      submitFormToSendPayment() {
        this.clearCardErrors();
        let valid = true;

        if (!this.card.number) {
          valid = false;
          this.cardNumberError = "Card Number is Required";
        }
        if (!this.card.cvc) {
          valid = false;
          this.cardCvcError = "CVC is Required";
        }
        if (!this.card.expiry) {
          valid = false;
          this.cardExpiryError = "Month is Required";
        }
        if (this.stripeError) {
          valid = false;
        }
        if (valid) {
          this.submitPayment()
        }
      },

      submitPayment() {
        this.stripe.confirmCardPayment(this.clientSecret, {
          payment_method: {card: card}
        }).then((result) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            this.stripeError = result.error.message;
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              // There's a risk of the customer closing the window before callback
              // execution. Set up a webhook or plugin to listen for the
              // payment_intent.succeeded event that handles any business critical
              // post-payment actions.
            }
          }
        })  
      },

      clearElementsInputs() {
        this.cardCvc.clear()
        this.cardExpiry.clear()
        this.cardNumber.clear()
      },

      clearCardErrors() {
        this.stripeError = ''
        this.cardCvcError = ''
        this.cardExpiryError = ''
        this.cardNumberError = ''
      },
			
			reset() {
				this.clearElementsInputs()
				this.clearCardErrors()
			}
  }
};
</script>

