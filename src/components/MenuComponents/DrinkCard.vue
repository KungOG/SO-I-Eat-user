<template>
  <div class="drink-card">
    <section class="drink-text">
      <div class="number">
        <h4>{{drink.productNr}}</h4>
      </div>
      <div class="drink-name">
        <h3>{{drink.productName}}</h3>
      </div>
      <div class="price">
        <h4>{{drink.price}}:-</h4>
      </div>
      <div class="icon-container">
        <Add class="add-icon" :class="activeClass" />
      </div>
      <div class="drink-info">
        <p>{{drink.description}}</p>
      </div>
      <div class="filler" />
    </section>
  </div>
</template>

<script>
import Add from './Card/Add.vue';

export default {
  components: {
    Add,
  },
  props: {
    drink: {
      type: Object,
      required: false,
    },
    activeClass: {
      type: String,
    },
  },
};
</script>
