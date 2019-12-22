<template>
  <div class='cart'>
    <div
      class='dark-coverage'
      :class="showTheCart === true ? '-active' : ''"
      @click="closeTheCart()"
    />
    <div class='cart-wrapper' :class="showTheCart === true ? '-active' : ''">
      <section class='head'>
        <h1>Min beställning</h1>
        <h5 v-if="orderItems.table === 'take away'" class='bord'>Take Away</h5>
        <h5 v-else class='bord'>Bord {{orderItems.table}}</h5>
      </section>
      <section class='cart-order'>
        <div class='order-items' v-for="(item, i) in foodOrders" :key="`order-food-items-${i}`">
          <h6 class="amount">{{item.count > 1 ? item.count : ''}}</h6>
          <div class="dish"
          @click="item.value.productName !== 'lunchbuffé' ? editCartItem(item, i) : ''">
            <h6>{{item.value.productName}}</h6>
            <p>{{item.value.protein}}</p>
            <p v-for="(add,i) in item.value.add" :key="`item-add-${i}`">+ {{add.name}}</p>
            <p v-for="(remove, i) in item.value.remove" :key="`item-remove-${i}`">- {{remove}}</p>
          </div>
          <h6 class='price'>
            {{item.value.price + item.value.add.map(x => x.price).reduce((a, b) => a + b, 0)}}:-
          </h6>
          <img class='icon' src="@/assets/icons/delete.svg" @click="deleteOrderItemFood(item)">
        </div>
        <div class='order-items' v-for="(item, i) in drinkOrders" :key="`order-drink-items-${i}`">
          <h6 class="amount">{{item.count > 1 ? item.count : ''}}</h6>
          <div class="dish">
            <h6>{{item.value.productName}}</h6>
            <p>{{item.value.description}}</p>
          </div>
          <h6 class='price'>{{item.value.price * item.count}}:-</h6>
          <img class='icon' src="@/assets/icons/delete.svg" @click="deleteOrderItemDrink(item)">
        </div>
      </section>
      <section class='summery'>
        <h6>Totalsumma</h6>
        <h6 class='totalAmount'>{{totalAmount}}:-</h6>
        <StandardButton class='desktop btn' :buttonText="'Betala'" @click.native="toPayment"/>
      </section>
    </div>
    <Payment v-if="showPayment" />
  </div>
</template>

<script>
import StandardButton from '@/components/StandardButton.vue';
import Payment from '@/components/Payment.vue';

export default {
  components: {
    StandardButton,
    Payment,
  },
/*   watch: {
    showTheCart() {
      return this.$store.state.showTheCart;
    },
  }, */
  computed: {
    showTheCart() {
      return this.$store.state.showTheCart;
    },
    orderItems() {
      return this.$store.state.order;
    },
    foodOrders() {
      var filtered = [];
      var copy = this.orderItems.foodItems.slice(0);
      for (var i = 0; i < this.orderItems.foodItems.length; i++) {
        var myCount = 0;	
        for (var w = 0; w < copy.length; w++) {
          if (this.orderItems.foodItems[i].productName === copy[w].productName) {
            if(copy[w].productName === 'lunchbuffé') {
              myCount++;
              copy.splice(w, 1, 0) 
            } else {
              myCount++;
            }
          }
        }
        if (myCount > 0) {
          var a = new Object();
          a.value = this.orderItems.foodItems[i];
          a.count = myCount;
          filtered.push(a);
        }
      }
      return filtered;
    },
    drinkOrders() {
      var filtered = [];
      var copy = this.orderItems.drinkItems.slice(0);
      for (var i = 0; i < this.orderItems.drinkItems.length; i++) {
        var myCount = 0;	
        for (var w = 0; w < copy.length; w++) {
          if (this.orderItems.drinkItems[i].productName === copy[w].productName) {
            myCount++;
            copy.splice(w, 1, 0) 
          }
        }
        if (myCount > 0) {
          var a = new Object();
          a.value = this.orderItems.drinkItems[i];
          a.count = myCount;
          filtered.push(a);
        }
      }
      return filtered;
    },
    showPayment() {
      return this.$store.state.showPayment;
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
    toPayment() {
      this.$store.state.order.foodItems.length !== 0 || this.$store.state.order.drinkItems.length !== 0 ? this.$store.commit('setShowPayment', true) : '';
    },
    deleteOrderItemFood(item) {
      this.$store.commit('deleteOrderItemFood', this.orderItems.foodItems.indexOf(item.value));
    },
    deleteOrderItemDrink(item) {
      this.$store.commit('deleteOrderItemDrink', this.orderItems.drinkItems.indexOf(item.value));
    },
    editCartItem(item, i) {
      if(this.$route.path !== '/order') {
        this.$router.push(`${item.productName}`);
      }
      this.$store.commit('setShowCart', null)
      this.$store.commit('editCart', true);
      this.$store.commit('setItemToEdit', {item: item, index: i});
    },
    closeTheCart() {
      const toggleActiveCart = false;
      this.$store.commit('toggleActiveCart', toggleActiveCart);
    },
  },
};
</script>
