<template>
  <div class="alternative-wrapper">
    <div class='option-wrapper' v-if="showSpice || proteinItems.length !== 0">
      <div class='protein-wrapper' v-if="proteinItems.length !== 0">
        <div v-for="(item, i) in proteinItems" :key="`protein-items-${i}`" @click="chosenProtein = i">
          <div class="wrapper" :class="chosenProtein === i ? 'active' : ''" >
          <img v-if="chosenProtein === i" :src="require(`@/assets/icons/${item}Active.svg`)" alt="Välj">
          <img v-else :src="require(`@/assets/icons/${item}.svg`)" alt="Välj">
          </div>
        </div>
      </div>
      <div class="spice-wrapper" v-if="showSpice">
        <div v-for="(item, i) in spiceItems" :key="`spice-items-${i}`" @click="chosenSpice = i">
          <div class="wrapper" :class="chosenSpice === i ? 'active' : ''">
            <img v-if="chosenSpice === i" :src="require('@/assets/icons/' + item.activeUrl)" alt="Vald">
            <img v-else :src="require('@/assets/icons/' + item.imgUrl)" alt="Välj">
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
    showSpice: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    spiceItems: [
      {imgUrl: 'Spice.svg', activeUrl: 'Spice1Active.svg'},
      {imgUrl: 'Spice2.svg', activeUrl: 'Spice2Active.svg'},
      {imgUrl: 'Spice3.svg', activeUrl: 'Spice3Active.svg'}
    ],
    chosenProtein: -1,
    chosenSpice: -1,
  }),
};
</script>
