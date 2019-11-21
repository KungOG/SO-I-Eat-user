<template>
  <div id="app">
    <navigation-bar class="mobile"/>
    <div id="nav">
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <h1>Install!</h1>
      </a>
    </div>
    <modal v-if="showModal" />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    NavigationBar,
    Modal,
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    },
  },
  data: () => ({
    installBtn: 'none',
    installer: undefined,
  }),
  created() {
    let installPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = 'block';
    });

    this.installer = () => {
      this.installBtn = 'none';
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === 'accepted') {
          console.log('Install accepted!');
        } else {
          console.log('Install denied!');
        }
      });
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/app.scss';
</style>
