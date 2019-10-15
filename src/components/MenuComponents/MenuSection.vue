<template>
    <div class='menu-section'>
      <div class='wrapper'>
        <h1>{{category}}</h1>
        <CardText v-for="(item, i) in filteredItems" :key="i" :item="item"/>
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
  props: {
    items: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter(x => this.category === x.category);
    },
  },
};
</script>
