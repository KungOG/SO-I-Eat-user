<template>
  <div class='navigation-button'>
    <img :src="imageSrc" alt="">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
