<template>
    <div class='contact'>
      <Map />
      <ContactText />
    </div>
</template>

<script>
import Map from './Map.vue';
import ContactText from './ContactText.vue';

export default {
  name: 'contact',
  components: {
    Map,
    ContactText,
  },
};
</script>
