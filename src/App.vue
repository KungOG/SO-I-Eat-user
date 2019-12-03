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
import axios from 'axios';

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
<<<<<<< HEAD
  mounted() {
    setInterval(() => { 
      this.getBusinessStatus();
      this.getBusinessHours();
      this.checkCurrentTime();
    }, 5000);
  },
  methods: {
    checkCurrentTime() {
      const d = new Date();
      let currentTime = Number(d.getHours() + '.' + d.getMinutes());
      if(this.status === 'open') {
        this.$store.commit('setOpen', true);

        if(currentTime > Number(this.selectedOpenHour) && currentTime < Number(this.selectedCloseHour)) {
          this.$store.commit('setOpen', true);
        } else {
          this.$store.commit('setOpen', false);
        }
      } else {
        this.$store.commit('setOpen', false);
      }
    },
    getBusinessHours() {
      const url = 'https://so-i-eat-server.herokuapp.com/businessHours';
      axios
        .get(url)
        .then((response) => {
          this.selectedOpenHour = response.data[0].open;
          this.selectedCloseHour = response.data[0].closed;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBusinessStatus() {
=======
  methods: {
    getStatus() {
>>>>>>> 69d43caa1482a24a5d44306e5c6f8723d74542e9
      const url = 'https://so-i-eat-server.herokuapp.com/statuses';
      axios
        .get(url)
        .then((response) => {
<<<<<<< HEAD
          this.status = response.data[0].status;
=======
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
>>>>>>> 69d43caa1482a24a5d44306e5c6f8723d74542e9
        })
        .catch((error) => {
          console.log(error);
        });
    },
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 69d43caa1482a24a5d44306e5c6f8723d74542e9
};
</script>

<style lang="scss">
@import '@/assets/css/app.scss';
</style>
