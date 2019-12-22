<template>
  <div class="loading-page" v-if="!selfDestroy">
    <section class="loading-content">
      <img :src="icon" alt="Full size business logo">
      <div class='line-divider'>
        <div class='line' />
        <div class='loading-line'
        :class="loading === true ? '-active' : '' "
        />
      </div>
    </section>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import Icon from '@/assets/icons/FullLogo.svg';

export default {
  name: 'loading',
  mounted() {
    this.activateLoading();
  },
  data: () => ({
    icon: Icon,
    loading: false,
    selfDestroy: false,
  }),
  methods: {
    activateLoading() {
      setTimeout(() => {
        this.loading = true;
        this.callDestroy();
      }, 2000);
    },
    callDestroy() {
      setTimeout(() => {
        this.selfDestroy = true;
      }, 3000);
    },
  },
};
</script>
<style lang="scss">
.loading-page {
  background: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 10000;
  width: 100vw;
  height: 100vh;

  .loading-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .line-divider {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100px;
    }

    > .line-divider > .line {
      background: #c4c4c4;
      position: absolute;
      top: calc(50% + 3px);
      height: 2px;
      width: 100%;
    }

    .loading-line {
      background: #ac9416;
      position: absolute;
      border-radius: 100px;
      width: 0;
      height: 6px;
      top: 50%;
      left: 0;
      z-index: 10;

      &.-active {
        width: 100%;
        transition: width 3s;
      }
    }

    img {
      width: 80%;
    }
  }
}
</style>
