<template>
  <div class='navigation-button' @click="setTakeAway">
    <router-link :to="url">
    <img :src="imageSrc" alt="title">
    <span>{{title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
    },
    title: {
      type: String,
    },
    url: {
      type: String,
      required: false,
    },
  },
  methods: {
    setTakeAway() {
      this.title === 'ta med' ? this.$store.commit('setTableInput', 'take away') : '';
      this.title === 'äta här' ? this.$store.commit('setTableInput', '') : '';
    },
  },
};
</script>
