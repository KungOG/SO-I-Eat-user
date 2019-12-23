<template>
  <div class='home'>
    <NavigationBarDesktop class="desktop" />
    <div class='wrapper' :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <section class="navigation-buttons-container">
        <NavigationButton :imageSrc="TakeAway.url"
        :title="TakeAway.text" url="/order"/>
        <NavigationButton :imageSrc="EatHere.url"
        :title="EatHere.text" class="mobile" url="/order"/>
        <NavigationButton :imageSrc="Maps.url"
        :title="Maps.text" class="desktop" url="/"/>
        <NavigationButton :imageSrc="Menu.url"
        :title="Menu.text" url="/" @click.native="scrollToMenu" />
      </section>
      <div class='line-wrapper'>
        <div class='line-container'>
          <div class="line-wrapper-upper-text desktop">
            <img :src="TextLogotype" class='line-container-image' alt='Logotype'>
            <span class='line-container-text '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
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
      <div class='golden-arrow bounce'>
        <img :src="Arrow" alt="Arrow clickable going to menu" @click="scrollToMenu()">
      </div>
    </div>
    <Products id="products"/>
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
import NavigationBarDesktop from '@/components/NavigationBarDesktop.vue';

export default {
  name: 'home',
  components: {
    Products,
    Map,
    ContactText,
    NavigationButton,
    NavigationBarDesktop,
  },

  data: () => ({
    TextLogotype: require('@/assets/icons/FullLogo.svg'),
    TakeAway: { url: require('@/assets/icons/TakeAway.svg'), text: 'ta med' },
    Menu: { url: require('@/assets/icons/Menu.svg'), text: 'se meny' },
    Maps: { url: require('@/assets/icons/Maps.svg'), text: 'hitta hit' },
    EatHere: { url: require('@/assets/icons/EatHere.svg'), text: 'äta här' },
    Arrow: require('@/assets/icons/Arrow.svg'),
  }),

  methods: {
    getImgUrl() {
      return require('@/assets/images/background.png');
    },
    scrollToMenu() {
      this.$nextTick(() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' }))
    },
  },
};
</script>
