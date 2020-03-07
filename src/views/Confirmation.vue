<template>
  <div class='confirmation'>
    <div class='confirmation-wrapper'>
      <section class='upper-image-confirmation'>
        <img :src="icon" alt="Fullsize business logo" />
      </section>
      <div class='content-confirmation'>
        <section class='upper-confirmation-section'>
          <h1>Tack för ditt köp!</h1>
          <h5>Ditt ordernummer är</h5>
          <h3>{{orderNumber}}</h3>
          <hr>
          <div class='lower-text-wrapper'>
            <p>{{text}}</p>
            <p>Kvitto skickas per mail om du uppgav din mailadress vid betalning. <br><br>Smaklig måltid!</p>
          </div>
        </section>
        <section class='lower-confirmation-section'>
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
    StandardButton,
  },
  data: () => ({
    icon: Icon,
    ordernumber: '87HUFI',
    textTakeAway: 'Du är välkommen att hämta din beställning hos oss på Kustvägen 46 i Mellbystrand.',
    textEatHere: 'Din beställning serveras inom kort.',
  }),
  computed: {
    order() {
      return this.$store.state.order;
    },
    orderNumber() {
      return this.$route.params.nr;
    },
    text() {
      if (this.order.table === 'take away') {
        return this.textTakeAway;
      }
      return this.textEatHere;
    },
  },
};
</script>
