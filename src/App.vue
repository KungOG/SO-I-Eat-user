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
import axios from 'axios';

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
    status: null,
  }),
  created() {
    let installPrompt;
    this.$store.state.status === null ? this.getStatus() : '';

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
  methods: {
    getStatus() {
      const url = 'https://so-i-eat-server.herokuapp.com/statuses';
      axios
        .get(url)
        .then((response) => {
          this.status = response.data;
          this.$store.commit('setStatus', response.data);
        })
        .then(() => {
          console.log(this.status[0])
          if(this.status[0].status === 'closed') {
            this.$store.commit('setShowModal', true);
            this.$store.commit('setModalText', 'Restaurangen är stängd');
            this.$store.commit('setShowTextModal', true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/app.scss';
</style>
