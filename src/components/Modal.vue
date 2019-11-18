<template>
  <div class='modal'>
    <section class='modal-wrapper'>
      <section class="modal-content">
        <slot/>
      </section>
      <section class='modal-buttons'>
        <StandardButton v-if="showAbort" buttonText="Avbryt"/>
        <StandardButton />
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
};
</script>
