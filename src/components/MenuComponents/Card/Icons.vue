<template>
  <div class='icon-wrapper'>
    <img class='protein-icon' v-for="(item, i) in proteinItems" :key="i" :src="require('@/assets/icons/' + item.imgUrl)" alt="item.name">
  </div>
</template>

<script>
export default {
  props: {
    proteinItems: {
      type: Array,
    },
  },
}
</script>
