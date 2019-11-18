<template>
  <div class='modal'>
    <section class="modal-content">
      <slot/>
    </section>
    <section class='modal-buttons'>
      <StandardButton @click=""/>
      <StandardButton @click=""/>
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
