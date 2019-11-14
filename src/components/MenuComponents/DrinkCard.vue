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
        <h4>{{test.price}}</h4>
      </div>
      <div class="add-icon">
        <Add class="add-icon"/>
      </div>
      <div class="drink-info">
        <p>{{test.info}}</p>
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
  data() {
    return {
      test: {
        price: 33,
        drinkName: 'Cola Cola',
        drinkNr: 3,
        info: '33cl',
      } 
    }
  },
  props: {
    drink: {
      type: Object,
      required: false,
    },
  },
};
</script>