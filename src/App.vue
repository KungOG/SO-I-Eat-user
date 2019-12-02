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
    selectedOpenHour: null,
    selectedCloseHour: null,
    status: null,
  }),
  created() {
    let installPrompt;
    this.$store.dispatch('getBusinessHours');

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
      const url = 'https://so-i-eat-server.herokuapp.com/statuses';
      axios
        .get(url)
        .then((response) => {
          this.status = response.data[0].status;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};
</script>

<style lang="scss">
@import '@/assets/css/app.scss';
</style>
