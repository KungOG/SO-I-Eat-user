<template>
  <div class='modal'>
    <section class='modal-wrapper'>
      <section class="modal-content">
        <slot/>
      </section>
      <section class='modal-buttons'>
        <StandardButton class="abort-button" v-if="showAbort" buttonText="Avbryt" @click.native="closeModal" />
        <StandardButton @click.native="sendTableInput" />
      </section>
    </section>
  </div>
</template>

<script>
import StandardButton from './StandardButton.vue';

export default {
  name: 'modal',
  components: {
    StandardButton,
  },
  props: {
    showAbort: {
      type: Boolean,
    },
  },
  methods: {
    sendTableInput() {
      console.log('hej')
      this.$emit('sendTableInput');
    },
    closeModal() {
      this.$store.commit('setOrderState');
      this.$router.push('/');
    },
  },
};
</script>
