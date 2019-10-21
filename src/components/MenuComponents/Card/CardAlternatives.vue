<template>
  <div class="alternative-wrapper">
    <div class='option-wrapper'>
      <div class='protein-wrapper'>
        <div v-for="(item, i) in proteinItems" :key="i" @click="chosenProtein = i">
          <div class="wrapper" :class="chosenProtein === i ? 'active' : ''" >
          <img :src="require('@/assets/icons/' + item.imgUrl)" alt="Välj">
          </div>
        </div>
      </div>
      <div class="spice-wrapper">
        <div v-for="(item, i) in spiceItems" :key="i" @click="chosenSpice = i">
          <div class="wrapper" :class="chosenSpice === i ? 'active' : ''">
            <img :src="require('@/assets/icons/' + item.imgUrl)" alt="Välj">
          </div>
        </div>
      </div>
    </div>
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
  data: () => ({
    spiceItems: [{imgUrl: 'Spice.svg'}, {imgUrl: 'Spice2.svg'}, {imgUrl: 'Spice3.svg'}],
    chosenProtein: -1,
    chosenSpice: -1,
  }),
}
</script>
