<template>
  <div class="alternative-wrapper">
    <div class='option-wrapper' v-if="showSpice || proteinItems.length !== 0">
      <div class='protein-wrapper' v-if="proteinItems.length !== 0">
        <div v-for="(item, i) in proteinItems" :key="`protein-items-${i}`" @click="chosenProtein(i, item)">
          <div class="wrapper" :class="activeProtein === i || proteinItems.length === 1 ? 'active-protein' : ''" >
          <img v-if="activeProtein === i || proteinItems.length === 1" :src="require(`@/assets/icons/${item}Active.svg`)" alt="Välj">
          <img v-else :src="require(`@/assets/icons/${item}.svg`)" alt="Välj">
          </div>
        </div>
      </div>
      <div class="spice-wrapper" v-if="showSpice">
        <div v-for="(item, i) in spiceItems" :key="`spice-items-${i}`" @click="chosenSpice(i)">
          <div class="wrapper" :class="activeSpice === i ? 'active-spice' : ''">
            <img v-if="activeSpice === i" :src="require('@/assets/icons/' + item.activeUrl)" alt="Vald">
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
    activeProtein: -1,
    activeSpice: -1,
  }),
  methods: {
    chosenProtein(i, item) {
      this.activeProtein = i;
      this.$emit('setProtein', item);
    },
    chosenSpice(i) {
      this.activeSpice = i;
      this.$emit('setSpice', i);
    },
  },
};
</script>
