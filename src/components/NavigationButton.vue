<template>
  <div class='navigation-button'>
    <img :src="imageSrc" alt="">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    title: String,
  },
};
</script>
