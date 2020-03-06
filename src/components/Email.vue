<template>
  <div class="payment">
    <div class="payment-background-overlay" @click="closeEmailModal" />
    <img class="modal-cross-icon" :src="closeDown" />

    <div class="payment-wrapper">
      <p>Vänligen fyll i din mailadress för kvitto</p>
      <form class="payment-form">
          <div class="payment-error">
            <p class="email-error" v-if="errorEmail">{{errorEmail}}</p>
          </div>
          <div class="payment-card">
            <input class="email-input" type="text" v-model="email" placeholder="Email">
          </div>
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">Jag behöver inget kvitto</label>
        <div class="payment-buttons">
          <button id="submit-button" :class="{ disabled: disabled }" @click.prevent="toPayment">
            <span class="button-text">OK</span>
          </button>
        </div>
      </form>
    </div>
    
  </div>
</template>


<script>
import CloseDown from '@/assets/icons/WhiteCross.svg';

export default {
  data: () => ({
    closeDown: CloseDown,
    email: null,
    disabled: false,
    errorEmail: null,
    checked: false,
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  }),
  methods: {
    closeEmailModal() {
      this.$store.commit('setShowEmail', false)
    },
    toPayment() {
      if(this.checked === false) {
        if(this.email == null || this.email == '') {
          this.errorEmail = "Ange mailadress";
        }
        else if(!this.reg.test(this.email)) {
          this.errorEmail = "Ange en korrekt mailadress";
        }
        else {
          this.$store.commit('setEmail', this.email);
          this.$store.commit('setShowEmail', false);
          this.$store.commit('setShowPayment', true);
          this.errorEmail = null;
        }
      } else {
          this.$store.commit('setEmail', this.email);
          this.$store.commit('setShowEmail', false);
          this.$store.commit('setShowPayment', true);
          this.errorEmail = null;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
        .email-input {
        background: pink;
        border: none;
        width: 80%;
      }
</style>