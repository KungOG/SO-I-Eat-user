<template>
<div>
  <div class="image-container" :style="{backgroundImage: 'url(' + getImgUrl() + ')'}"></div>
</div>
</template>

<script>

export default {
  name: 'card-image',
  props: {
    imgName: {
      type: String,
    },
  },
  methods: {
    getImgUrl() {
      return require('@/assets/images/dish.png');
    },
  },
};

</script>
