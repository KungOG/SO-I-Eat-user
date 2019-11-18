<template>
  <div class='modal'>
    <section class="modal-content">
      <slot/>
    </section>
    <section class='modal-buttons'>
      <StandardButton />
      <StandardButton />
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
};
</script>
