<template>
  <div class="side-navigation">
    <div class="icon-wrapper">
      <img :src="require('@/assets/icons/' + icons.logo)" alt="hem">
      <img v-if="!showTime" :src="require('@/assets/icons/' + icons.clock)"
      alt="info"
      @click="showTheTime">
      <div class="show-time" v-if="showTime">
        <span>Väntetiden är just <br> nu ca {{productionTime}} min</span>
      </div>
    </div>
    <div class="category-wrapper">
      <ul>
        <li v-for="(category, i) in categories" :key="i">
          <h3 @click="select(i)" :class="selected === i ? 'selectedCategory' : ''">
            {{category.categoryName}}
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    showTime: false,
    icons: {
      logo: 'LogoNoText.svg',
      clock: 'Clock.svg',
    },
    selected: null,
  }),
  computed: {
    productionTime() {
      return this.$store.state.productionTime;
    },
  },
  methods: {
    select(value) {
      this.selected = value;
      this.$emit('setSelected', value);
      this.$emit('setSelectedCard', -1);
    },
    showTheTime() {
      this.showTime = !this.showTime;
      setTimeout(() => {
        this.showTime = !this.showTime;
      }, 3000);
    },
  },
};
</script>
