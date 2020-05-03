<template>
  <div class="nav-desk-container">
    <div class="nav-item">
      <img :src="require('@/assets/icons/FullLogo.svg')" @click="scrollTo('home')" />
    </div>
    <div class="nav-item">
      <transition name="info">
        <div class="info-menu" v-if="showInfoMenu">
          <span @click="scrollTo('contact')">Kontakt</span>
          <span @click="scrollTo('about')">Om oss</span>
          <!--  <span @click="showTerms = true">Villkor</span> -->
        </div>
      </transition>
      <img :src="require('@/assets/icons/Info.svg')" @click="showInfoMenu = !showInfoMenu" />
    </div>
    <TermsModal v-if="showTerms" @closeTermsModal="showTerms = false" />
  </div>
</template>

<script>
import TermsModal from "@/components/TermsModal.vue";

export default {
  data: () => ({
    showInfoMenu: false,
    showTerms: false
  }),
  components: {
    TermsModal
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
