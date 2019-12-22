<template>
  <div class='home'>
    <div class='wrapper' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <section class="navigation-buttons-container">
        <NavigationButton :imageSrc="TakeAway.url" :title="TakeAway.text"/>
        <NavigationButton :imageSrc="MenuIcon.url" :title="MenuIcon.text"/>
        <NavigationButton :imageSrc="EatHere.url" :title="EatHere.text" class="mobile"/>
        <NavigationButton :imageSrc="Maps.url" :title="Maps.text" class="desktop"/>
      </section>
      <div class='line-wrapper'>
        <div class='line-container'>
          <span class='line-wrapper-text'>
            Öppet tis-sön 11-21<br>
            Lunch tis-fre 11-14
          </span>
          <div class='first-line' />
          <div class='second-line' />
          <div class='third-line' />
          <div class='fourth-line' />
        </div>
      </div>
      <div class='golden-arrow'>
        <img :src="Arrow" alt="" @click="test()">
      </div>
    </div>
    <Products />
    <section class="text-section desktop">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </section>
    <section class="map-section desktop">
      <Map />
      <div class="text-wrapper">
        <ContactText />
      </div>
    </section>
    <section class="about-section desktop">
      <h3>Genuina smaker från Thailand</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div>Bild bild bild</div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
  </div>
</template>

<script>
import Products from './Products.vue';
import Map from '@/components/InfoPages/Map.vue';
import ContactText from '@/components/InfoPages/ContactText.vue';
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'home',
  components: {
    Products,
    Map,
    ContactText,
    NavigationButton,
  },

  data: () => ({
    TakeAway: { url: require('@/assets/icons/TakeAway.svg'), text: 'Ta med' },
    MenuIcon: { url: require('@/assets/icons/MenuIcon.svg'), text: 'Se Menyn' },
    Maps: { url: require('@/assets/icons/Maps.svg'), text: 'Hitta hit' },
    EatHere: { url: require('@/assets/icons/EatHere.svg'), text: 'Äta här' },
    Arrow: require('@/assets/icons/Arrow.svg'),
  }),

  methods: {
    test() {
      console.log('click');
    },
    getImgUrl() {
      return require('@/assets/images/background.png');
    },
  },
};
</script>
