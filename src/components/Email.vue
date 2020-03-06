<template>
  <div class="email-container">
    <div class="email-background-overlay" @click="closeEmailModal" />
    <img class="modal-cross-icon" :src="closeDown" />
    <div class="email-wrapper">
      <form class="email-form">
        <p>Vänligen fyll i din mailadress för kvitto</p>
        <p class="email-error" v-if="errorEmail">{{errorEmail}}</p>
        <div class="email-card">
          <input class="email-input" type="text" v-model="email" placeholder="Email">
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="checkbox" v-model="checked">
          <label for="checkbox">Jag behöver inget kvitto</label>
        </div>
        <div class="email-buttons">
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
    email: '',
    errorEmail: null,
    checked: false,
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  }),
  computed: {
    disabled() {
      if(this.email.length > 3 || this.checked === true) {return false} else {return true};
    },
  },
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
        width: 100%;
      }
</style>