<template>
  <div class='icon-wrapper'>
    <img class='protein-icon' v-for="(item, i) in proteinItems" :key="i" v-if="item !== ''" :src="require('@/assets/icons/' + item +'.svg')" alt="item.name">
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
