<template>
  <div class='modal'>
    <section class='modal-wrapper'>
      <section class='modal-content'>
        <Terms class="terms-modal"/>
      </section>
      <img class='modal-cross-icon' :src="closeDown" @click="$emit('closeTermsModal')"/>
    </section>
    <div class='home modal-close-button' @click="$emit('closeTermsModal')" />
  </div>
</template>

<script>
import Terms from '@/components/InfoPages/Terms.vue';
import CloseDown from '@/assets/icons/WhiteCross.svg';

export default {
  components: {
    Terms,
  },
  data: () => ({
    closeDown: CloseDown,
  }),
};
</script>

<style lang="scss">

.terms-modal {
  height: 70vh;
    overflow: scroll;
}
</style>
