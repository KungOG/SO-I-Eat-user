<template>
  <transition v-on:enter="fadeIn" v-on:leave="fadeOut">
    <div class="white-cover" v-if="enabled" :style="{ background: background }">
      <div class="loader">
        <div class="arc"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import animateplus from 'animateplus'

  export default {
    name: 'loader',
    props: {
      enabled: {
        type: Boolean,
        default: () => false
      },
      background: {
        type: String,
        default: () => 'transparent'
      }
    },
    methods: {
      fadeIn (el, done) {
        animateplus({
          elements: el,
          duration: 200,
          opacity: [0, 1],
          easing: 'linear'
        }).then(done)
      },
      fadeOut (el, done) {
        animateplus({
          elements: el,
          duration: 200,
          opacity: [1, 0],
          easing: 'linear'
        }).then(done)
      }
    }
  }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  .white-cover {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 100;
    height: 90%;
    text-align: left;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 64px;
    height: 64px;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 320px) and (max-width: 736px) {
      width: 30px;
      height: 30px;
    }

    .arc {
      position: absolute;
      width: 100%;
      height: 100%;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid;
        border-radius: 50%;
      }

      &:before {
        border-color: #c0c9cd;
        opacity: 0.3;
      }

      &:after {
        border-color: transparent;
        border-bottom-color: white;
        animation: rotate 1s infinite linear;
      }
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
</style>