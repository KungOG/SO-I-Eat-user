<template>
  <div id="app">
    <NavigationBar class="mobile"/>
    <div id="nav">
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <h1>Install!</h1>
      </a>
    </div>
    <Loading />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Loading from '@/components/Loading.vue';
// eslint-disable-next-line import/no-unresolved
import NavigationBar from '@/components/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
    Loading,
  },
  data: () => ({
    installBtn: 'none',
    installer: undefined,
    status: null,
    selectedOpenHour: '',
    selectedCloseHour: '',
  }),
  created() {
    let installPrompt;
    // eslint-disable-next-line no-unused-expressions
    this.$store.state.status === null ? this.getStatus() : '';

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = 'block';
    });

    this.installer = () => {
      this.installBtn = 'none';
      installPrompt.prompt();
      installPrompt.userChoice.then((result) => {
        if (result.outcome === 'accepted') {
          console.log('Install accepted!');
        }
        console.log('Install denied!');
      });
    };
  },
  beforeMount() {
    setInterval(() => {
      this.getBusinessHours();
      this.checkCurrentTime();
    }, 10000);
  },
  methods: {
    checkCurrentTime() {
      const d = new Date();
      const currentTime = Number(d.getHours() + '.' + d.getMinutes());
      if (this.status === 'open') {
        this.$store.commit('setOpen', true);
        if (currentTime > Number(this.selectedOpenHour)
        && currentTime < Number(this.selectedCloseHour)) {
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
    getStatus() {
      const url = 'https://so-i-eat-server.herokuapp.com/statuses';
      axios
        .get(url)
        .then((response) => {
          this.status = response.data[0].status;
          this.$store.commit('setStatus', response.data);
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
