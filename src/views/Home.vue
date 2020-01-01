<template>
  <div class='home' id="home">
    <NavigationBarDesktop class="desktop home" />
    <div class='wrapper'>
      <section class="navigation-buttons-container">
        <NavigationButton :imageSrc="TakeAway.url"
        :title="TakeAway.text" url="/order"/>
        <NavigationButton :imageSrc="EatHere.url"
        :title="EatHere.text" class="mobile" url="/order"/>
        <NavigationButton :imageSrc="Maps.url"
        :title="Maps.text" class="desktop" url="/" @click.native="scrollTo('contact')"/>
        <NavigationButton :imageSrc="Menu.url"
        :title="Menu.text" url="/" @click.native="scrollTo('products')" />
      </section>
      <div class='line-wrapper'>
        <div class='line-container'>
          <div class="line-wrapper-upper-text desktop">
            <img :src="TextLogotype" class='line-container-image' alt='Logotype'>
            <span class='line-container-text '>
              Hos oss upplever du den genuina smaken av Thailand. I vår familjeägda restaurang serveras den hemlagade
              thaimaten från de bästa råvarorna. Du kan även beställa online, både vid take away och restaurangbesök.<br>
              Vi önskar dig varmt välkommen!
            </span>
            <p>Öppet tis-sön 11-21</p>
            <p>Lunch tis-fre 11-14</p>
          </div>
          <div class='line-wrapper-text mobile'>
            <p>Öppet tis-sön 11-21</p>
            <p>Lunch tis-fre 11-14</p>
          </div>
          <div class='first-line' />
          <div class='second-line' />
          <div class='third-line' />
          <div class='fourth-line' />
        </div>
      </div>
      <div class='golden-arrow bounce'>
        <img :src="Arrow" alt="Arrow clickable going to menu" @click="scrollTo('products')">
      </div>
    </div>
    <Products id="products"/>
    <section class="text-section desktop">
      <p>"Det thailändska köket står för fräscha råvaror med en perfekt balans mellan sött, salt, syrligt, beskt och hetta."</p>
    </section>
    <section class="map-section desktop" id="contact">
      <Map />
      <div class="text-wrapper">
        <ContactText />
      </div>
    </section>
    <section class="about-section desktop" id="about">
      <h3>Genuina smaker från Thailand</h3>
      <p>Den thailändska maten erbjuder en explosion för smaklökarna. Kyckling, biff och fläskkött serveras ofta i små färdigskurna
        bitar och kombineras med grönsaker, ris och nudlar. Salt är Thailändarna skeptiska till, istället används den berömda fisksåsen
        för att salta maten, och chilin ger den berömda hettan.
      </p>
      <div class="about-pics">
        <div class="about-img">
          <div class="dark" />
          <img :src="imgUrl" alt="restaurangpersonal">
        </div>
        <div class="about-img">
          <img :src="imgUrl" alt="restaurangpersonal">
        </div>
        <div class="about-img">
          <div class="gold" />
          <img :src="imgUrl" alt="restaurangpersonal">
        </div>
      </div>
      <p>Vi har lagat mat till hungriga halländare och turister i 10 år och erbjuder numera möjligheten att beställa och betala maten online
        via vår hemsida.
      </p>
      <br>
      <p>Välkommen till oss! </p>
    </section>
    <HomeFooter class="desktop"/>
  </div>
</template>

<script>
import Products from './Products.vue';
import Map from '@/components/InfoPages/Map.vue';
import ContactText from '@/components/InfoPages/ContactText.vue';
import NavigationButton from '@/components/NavigationButton.vue';
import NavigationBarDesktop from '@/components/NavigationBarDesktop.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import AboutPic from '@/assets/images/aboutpic.jpg';

export default {
  name: 'home',
  components: {
    Products,
    Map,
    ContactText,
    NavigationButton,
    NavigationBarDesktop,
    HomeFooter,
  },

  data: () => ({
    TextLogotype: require('@/assets/icons/FullLogo.svg'),
    TakeAway: { url: require('@/assets/icons/TakeAway.svg'), text: 'ta med' },
    Menu: { url: require('@/assets/icons/Menu.svg'), text: 'se meny' },
    Maps: { url: require('@/assets/icons/Maps.svg'), text: 'hitta hit' },
    EatHere: { url: require('@/assets/icons/EatHere.svg'), text: 'äta här' },
    Arrow: require('@/assets/icons/Arrow.svg'),
    imgUrl: AboutPic,
  }),

  methods: {
    scrollTo(here) {
      this.$nextTick(() => document.getElementById(here).scrollIntoView({ behavior: 'smooth' }));
    },
  },
};
</script>
