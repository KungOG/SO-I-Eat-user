<template>
  <div id="app">
    <NavigationBar class="mobile"/>
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
    status: null,
    selectedOpenHour: '',
    selectedCloseHour: '',
  }),
  mounted() {
    this.getStatus();
    setInterval(() => {
      this.getStatus();
    }, 10000);
  },
  methods: {
    checkCurrentTime() {
      const d = new Date();
      const h = d.getHours();
      let hour = null;
      h > 0 ? hour = h : hour = 24;
      const minut = d.getMinutes();

      const currentTime = Number(`${hour}.${minut}`);
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
          this.checkCurrentTime();
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
          this.getBusinessHours();
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
