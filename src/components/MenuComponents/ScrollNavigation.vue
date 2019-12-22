<template>
  <div class="scroll-container" :class="showProductionTime ? 'active-production-time' : ''">
    <section class="upper-scroll-container">
      <div class="wait-time"><h5>Väntetiden är ca {{ productionTime }} min.</h5></div>
    </section>
    <section class="lower-scroll-container">
      <div class="nav-item"
      v-for="(category, i) in categories"
      :key="`categories-${i}`"
      :class="{ active: selected === i }">
        <div class='lower-nav-items'>
          <h5 class='nav-category-item'
            @click="select(i)"
            :class="{ selectedCategory: selected === i }">
          {{category.categoryName}}
          </h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
    },
  },
  data: () => ({
    selected: null,
  }),
  computed: {
    productionTime() {
      return this.$store.state.productionTime;
    },
    showProductionTime() {
      return this.$store.state.showProductionTime;
    },
  },
  methods: {
    select(value) {
      this.selected = value,
      this.$emit('setSelected', value)
    },
  },
};
</script>
