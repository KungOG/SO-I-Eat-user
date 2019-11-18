<template>
  <div class='cart'>
    <div class='cart-wrapper'>
      <section class='head'>
        <h1>Min beställning</h1>
        <h5 class='bord'>Bord 5</h5>
      </section>
      <section class='cart-order'>
        <div class='order-items' v-for="(item, i) in orderItems.foodItems" :key="`order-food-items-${i}`">
          <h6 class="amount">3</h6>
          <div class="dish">
            <h6>{{item.productName}}</h6>
            <p>{{item.protein}}</p>
            <p v-for="(add,i) in item.add" :key="`item-add-${i}`">+ {{add.name}}</p>
            <p v-for="(remove, i) in item.remove" :key="`item-remove-${i}`">- {{remove}}</p>
          </div>
          <h6 class='price'>{{item.price + item.add.map(x => x.price).reduce((a, b) => a + b, 0)}}:-</h6>
          <img class='icon' src="@/assets/icons/delete.svg" @click="deleteOrderItemFood(item)">
        </div>
        <div class='order-items' v-for="(item, i) in orderItems.drinkItems" :key="`order-drink-items-${i}`">
          <h6 class="amount">3</h6>
          <div class="dish">
            <h6>{{item.productName}}</h6>
            <p>{{item.description}}</p>
          </div>
          <h6 class='price'>{{item.price}}:-</h6>
          <img class='icon' src="@/assets/icons/delete.svg" @click="deleteOrderItemFood(item)">
        </div>
      </section>
      <section class='summery'>
        <h6>Totalsumma</h6>
        <h6 class='totalAmount'>{{totalAmount}}:-</h6>
        <StandardButton class='desktop btn' :buttonText="'Betala'" @click.native="sendOrder"/>
      </section>
    </div>
  </div>
</template>

<script>
import StandardButton from '@/components/StandardButton.vue';

export default {
  components: {
    StandardButton,
  },
  computed: {
    orderItems() {
      return this.$store.state.order;
    },
    totalAmount() {
      let foodBase = this.orderItems.foodItems.map(x => x.price).reduce((a, b) => a + b, 0);
      let drinkBase = this.orderItems.drinkItems.map(x => x.price).reduce((a, b) => a + b, 0);
      let addons = 0;
      this.orderItems.foodItems.forEach(item => {
        addons += item.add.map(x => x.price).reduce((a, b) => a + b, 0);
      });
      return foodBase + drinkBase + addons;
    },
  },
  methods: {
    sendOrder() {
      this.$store.dispatch('postOrder');
      console.log('skickat')
    },
    deleteOrderItemFood(item) {
      this.$store.commit('deleteOrderItemFood', this.orderItems.items.indexOf(item));
    },
  },
};
</script>
