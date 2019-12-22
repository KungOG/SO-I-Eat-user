<template>
  <div>
    <img :src="require('@/assets/icons/'+ image)" alt="Val" />
  </div>
</template>

<script>
export default {
  data: () => ({
    image: 'AddIcon.svg',
  }),
};
</script>
