<template>
  <div class="home" id="home">
    <div class="wrapper">
      <section class="welcome-wrapper">
        <div class="welcome-text-image">
          <img :src="TextLogotype" class="line-container-image" alt="Logotype" />
          <span class="line-container-text">
            Hos oss upplever du den genuina smaken av Thailand. I vår familjeägda restaurang
            serveras den hemlagade thaimaten från de bästa råvarorna.
            <br />Vi önskar dig varmt välkommen!
          </span>
          <p>Öppet tis-sön 11-21</p>
          <p>Lunch tis-fre 11-14</p>
        </div>
        <div class="button-container">
          <router-link class="mobile" to="/contact" style="margin-right: 15px">
            <button class="large-navigation-button find-us" @click="scrollTo('contact')">
              <span>HITTA</span>
              <span>I</span>
              <span>T</span>
              <img class="pin" :src="Maps" />
              <div class="button-line" />
            </button>
          </router-link>
          <button class="large-navigation-button menu" @click="scrollTo('products')">
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>Y</span>
            <div id="scroll-indicator">
              <div id="arrow" />
              <div class="indicator-line" />
            </div>
          </button>
          <router-link class="mobile" to="/about">
            <button class="large-navigation-button about-us" @click="scrollTo('about')">
              <span>OM</span>
              <span>S</span>
              <span>S</span>
              <img class="spice" :src="Spice" />
            </button>
          </router-link>
        </div>

        <!-- <div class="install-btn desktop" v-if="installBtn" @click="installer()">
          <p>Spara menyn som app</p>
        </div>
        <div class="install-btn mobile" v-if="installBtn" @click="installer()">
          <p>Spara menyn som app</p>
        </div>-->
      </section>
      <!-- <div id="scroll-indicator" @click="scrollTo('products')">
        <div id="arrow" />
        <div class="indicator-line" />
        <span class="indicator-text">MENY</span>
      </div>-->
    </div>
    <Products id="products" />
    <section class="text-section desktop">
      <p>
        "Det thailändska köket står för fräscha råvaror med en perfekt balans mellan sött, salt,
        syrligt, beskt och hetta."
      </p>
    </section>
    <section class="map-section desktop" id="contact">
      <Map />
      <div class="text-wrapper">
        <ContactText />
      </div>
    </section>
    <section class="about-section desktop" id="about">
      <h3>Genuina smaker från Thailand</h3>
      <p>
        Den thailändska maten erbjuder en explosion för smaklökarna. Kyckling, biff och fläskkött
        serveras ofta i små färdigskurna bitar och kombineras med grönsaker, ris och nudlar. Salt är
        Thailändarna skeptiska till, istället används den berömda fisksåsen för att salta maten, och
        chilin ger den berömda hettan.
      </p>
      <div class="about-pics">
        <div class="about-img">
          <div class="dark" />
          <img :src="imgUrl" alt="restaurangpersonal" />
        </div>
        <div class="about-img">
          <img :src="imgUrl" alt="restaurangpersonal" />
        </div>
        <div class="about-img">
          <div class="gold" />
          <img :src="imgUrl" alt="restaurangpersonal" />
        </div>
      </div>
      <p>
        Vi har lagat mat till hungriga halländare och turister i 10 år. Är ni sugna på Laholms
        kanske bästa thaimat, hör gärna av er till oss på
        <br />
        <a class="phone-number" href="tel:+46 430 28300">+46 430 28300</a>
      </p>
      <br />
      <p>Välkommen till oss!</p>
    </section>
    <HomeFooter />
  </div>
</template>

<script>
import Products from "./Products.vue";
import Map from "@/components/InfoPages/Map.vue";
import ContactText from "@/components/InfoPages/ContactText.vue";
import NavigationButton from "@/components/NavigationButton.vue";
import NavigationBarDesktop from "@/components/NavigationBarDesktop.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import AboutPic from "@/assets/images/aboutpic.jpg";

export default {
  name: "home",
  components: {
    Products,
    Map,
    ContactText,
    NavigationButton,
    NavigationBarDesktop,
    HomeFooter
  },

  data: () => ({
    TextLogotype: require("@/assets/icons/FullLogo.svg"),
    TakeAway: { url: require("@/assets/icons/TakeAway.svg"), text: "ta med" },
    Menu: { url: require("@/assets/icons/Menu.svg"), text: "se meny" },
    Maps: { url: require("@/assets/icons/Maps.svg"), text: "hitta hit" },
    EatHere: { url: require("@/assets/icons/EatHere.svg"), text: "äta här" },
    Arrow: require("@/assets/icons/Arrow.svg"),
    Spice: require("@/assets/icons/SpiceGold.svg"),
    Maps: require("@/assets/icons/Contact.svg"),
    imgUrl: AboutPic,
    installBtn: true,
    installer: undefined
  }),

  async created() {
    let installPrompt;
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = true;
    });
    this.installer = () => {
      this.installBtn = false;
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === "accepted") {
          console.log("Install accepted!");
        }
        console.log("Install denied!");
      });
    };
  },

  methods: {
    scrollTo(here) {
      this.$nextTick(() =>
        document.getElementById(here).scrollIntoView({ behavior: "smooth" })
      );
    }
  }
};
</script>
