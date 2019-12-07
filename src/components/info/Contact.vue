<template>
    <div class='contact'>
      <Map />
      <div class="text-wrapper">
        <p>Öppet tis-sön 11-21 <br> Lunch tis-fre 11-15</p>
        <hr>
        <p>Kustvägen 46 <br> 312 60 Mellbystrand</p>
        <p>+46 430 28300</p>
      </div>
    </div>
</template>
<script>
import Map from '@/components/Info/Map.vue';

export default {
  name: 'contact',
  components: {
    Map,
  }
};
</script>
