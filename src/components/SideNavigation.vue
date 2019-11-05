<template>
  <div class="side-navigation">
    <div class="icon-wrapper">
      <img :src="require('@/assets/icons/' + icons.logo)" alt="hem">
      <img :src="require('@/assets/icons/' + icons.info)" alt="info">
    </div>
    <div>
      <ul>
        <li v-for="(category, i) in categories" :key="i">
          <h3 @click="select(i)" :class="selected === i ? 'selectedCategory' : ''">{{category.categoryName}}</h3>
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
    icons: {
      logo: 'logga.svg',
      info: 'Info.svg',
    },
    selected: null,
  }),
  methods: {
    select(value) {
      this.selected = value;
      this.$emit('setSelected', value);
      this.$emit('setSelectedCard', -1);
    },
  },
};
</script>
