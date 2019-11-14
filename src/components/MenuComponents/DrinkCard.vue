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
        <h4>{{drink.price}}</h4>
      </div>
      <div class="add-icon">
        <Add class="add-icon"/>
      </div>
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
      required: true,
    },
  },
};
</script>