<template>
  <div class="alternative-wrapper">
    <div class='filler-one'></div>
    <div class='wrapper'>
      <div class="icon-wrapper" v-for="(item, i) in proteinItems" :key="i">
        <img class="alternative-icon" :src="require('@/assets/icons/' + item.imgUrl)" alt="item.name">
      </div>
    </div>
<!--     <div class="spice-wrapper" v-for="(item, i) in proteinItems" :key="i">
      <img class="alternative-spice" :src="require('@/assets/icons/' + item.imgUrl)" alt="spice icon">
    </div> -->
    <div class='filler-two'></div>
  </div>
</template>

<script>
export default {
    name: 'card-alternatives',
    props: {
        proteinItems: {
            type: Array,
            required: true,
        },
    },
}
</script>