<template>
    <div class='contact'>
      <Map />
      <ContactText />
    </div>
</template>

<script>
import Map from '@/components/Info/Map.vue';
import ContactText from '@/components/Info/ContactText.vue';

export default {
  name: 'contact',
  components: {
    Map,
    ContactText,
  },
};
</script>
