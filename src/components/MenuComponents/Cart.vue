<template>
  <div class='cart'>
    <div class='cart-wrapper'>
      <div class='head'>
        <h1>Min beställning</h1>
        <h5 class='bord'>Bord 5</h5>
      </div>
      <div class='cart-order'>
        <div class='order-items' v-for="(item, i) in orderItems.items" :key="`order-items-${i}`">
          <h6 class="amount">3</h6>
          <div class="dish">
            <h6>{{item.productName}}</h6>
            <p>{{item.protein}}</p>
            <p v-for="(add,i) in item.add" :key="`item-add-${i}`">+ {{add.name}}</p>
            <p v-for="(remove, i) in item.remove" :key="`item-remove-${i}`">- {{remove}}</p>
          </div>
          <h6 class='price'>{{item.price}}:-</h6>
          <img class='icon' src="@/assets/icons/delete.svg">
        </div>
      </div>
      <div class='summery'>
        <h6>Totalsumma</h6>
        <h6 class='totalAmount'>{{totalAmount}}:-</h6>
        <StandardButton class='desktop btn' :buttonText="'Betala'"/>
      </div>
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
      let base = this.orderItems.items.map(x => x.price).reduce((a, b) => a + b, 0);
      let addons = 0;
      this.orderItems.items.forEach(item => {
        addons += item.add.map(x => x.price).reduce((a, b) => a + b, 0);
      });
      return base + addons;
    },
  },
};
</script>
