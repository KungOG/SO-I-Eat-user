<template>
  <div class='confirmation'>
    <div class='confirmation-wrapper'>
      <section class='upper-image-confirmation'>
        <img :src="icon" alt="Fullsize business logo" />
      </section>
      <div class='content-confirmation'>
        <section class='upper-confirmation-section'>
          <h1>Tack för ditt köp!</h1>
          <h4>Ordernummer</h4>
          <h3>#{{ordernumber}}</h3>
        </section>
        <section class='lower-confirmation-section'>
          <div class='lower-text-wrapper'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <StandardButton @click.native="$router.push('/')"/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import StandardButton from '@/components/StandardButton.vue';
import Icon from '@/assets/icons/FullLogo.svg';

export default {
  name: 'confirmation',
  components: {
    Icon,
    StandardButton
  },
  data:() => ({
    icon: Icon,
    ordernumber: '87HUFI',
  }),
};
</script>