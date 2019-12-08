<template>
    <div class='contact'>
      <InfoHeader />
      <div class='maps'></div>
      <div class='contact-wrapper'>
        <span>Lunch:<br>Tisdag - Fredag, 11:00 till 15:00</span>
        <span>Öppet:<br>Tisdag - Söndag, 11:00 till 20:00</span>
        <div class='line' />
        <span>Kustvägen 46</span>
        <span>312 60 Mellbystrand</span>
        <a href="tel:+46430-283 00">+46 430-283 00</a>
      </div>
    </div>
</template>

<script>
import InfoHeader from '@/components/InfoComponents/InfoHeader.vue';

export default {
  name: 'contact',
  components: {
    InfoHeader
  }
}
</script>
