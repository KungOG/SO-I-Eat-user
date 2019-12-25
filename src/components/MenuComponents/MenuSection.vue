<template>
    <div class='menu-section'>
      <div class='menu-section-wrapper'>
        <h1>{{category.categoryName}}</h1>
        <CardText
          v-for="(item, i) in filteredItems"
          :displayIcons="displayIcons"
          :key="`filtered-items-${i}`"
          :item="item"/>
      </div>
    </div>
</template>

<script>
import CardText from './Card/CardText.vue';

export default {
  name: 'menu-section',
  components: {
    CardText,
  },
  data: () => ({
    displayIcons: true,
  }),
  props: {
    items: {
      type: Array,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter(x => this.category.categoryId === x.category).sort((a, b) => (a.productNr > b.productNr) ? 1 : -1);
    },
  },
};
</script>
