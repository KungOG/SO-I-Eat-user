<template>
  <div class='modal'>
    <section class='modal-wrapper'>
      <section class='modal-content'>
        <Lunch />
      </section>
      <StandardButton class='lunch-modal-button' button-text='Lägg till i beställning' @click.native="addLunchToCart" />
    </section>
    <div class='home modal-close-button' @click="$emit('closeLunchModal')" />
  </div>
</template>

<script>
import StandardButton from './StandardButton.vue';
import Lunch from '@/components/MenuComponents/Lunch.vue';

export default {
  components: {
    StandardButton,
    Lunch,
  },
  methods: {
    addLunchToCart() {
      this.$emit('closeLunchModal');
      this.$store.commit('addLunchToCart')
    },
  },
};
</script>

<style lang="scss">
  .lunch-modal-button {
    width: 85%;
    margin: 0 auto;
  }
</style>

