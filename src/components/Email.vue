<template>
  <div class="payment">
    <div class="payment-background-overlay" @click="closeEmailModal" />
    <img class="modal-cross-icon" :src="closeDown" />
    <div class="payment-wrapper">
      <form id="payment-form" class="payment-form">
        <div class="payment-information">
          <div class="payment-card">
            <input class="email-input" type="text" v-model="email" placeholder="Email">
          </div>
        </div>
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
  }),
  methods: {
    closeEmailModal() {
      this.$store.commit('setShowEmail', false)
    },
    toPayment() {
      this.$store.commit('setEmail', this.email);
      this.$store.commit('setShowEmail', false);
      this.$store.commit('setShowPayment', true);
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