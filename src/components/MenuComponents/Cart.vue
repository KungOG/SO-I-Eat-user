<template>
  <div class="cart">
    <div
      class="dark-coverage"
      :class="showTheCart === true ? '-active' : ''"
      @click="closeTheCart()"
    />
    <img
      class="modal-cross-icon desktop"
      :src="closeDown"
      :class="showTheCart === true ? '-active' : ''"
    />
    <div class="cart-wrapper" :class="showTheCart === true ? '-active' : ''">
      <section class="head">
        <h1>Min beställning</h1>
        <h5 v-if="orderItems.table === 'take away'" class="bord">Take Away</h5>
        <h5 v-else class="bord">Bord {{orderItems.table}}</h5>
      </section>
      <section class="cart-order">
        <div class="order-items" v-for="(item, i) in foodOrders" :key="`order-food-items-${i}`">
          <h6
            v-if="item.value.productName === 'lunchbuffé'"
            class="amount"
          >{{item.count > 1 ? item.count : ''}}</h6>
          <div
            class="dish"
            @click="item.value.productName !== 'lunchbuffé' ? editCartItem(item, i) : ''"
          >
            <h6>{{item.value.productName}}</h6>
            <p v-if="item.value.protein === 'Chicken'">Kyckling</p>
            <p v-if="item.value.protein === 'Beef'">Biff</p>
            <p v-if="item.value.protein === 'Pork'">Fläsk</p>
            <p v-if="item.value.protein === 'Shrimp'">Räkor</p>
            <p v-if="item.value.protein === 'Duck'">Anka</p>
            <p v-if="item.value.protein === 'Tofu'">Tofu</p>
            <p v-for="(add,i) in item.value.add" :key="`item-add-${i}`">+ {{add.productName}}</p>
            <p v-for="(remove, i) in item.value.remove" :key="`item-remove-${i}`">- {{remove}}</p>
          </div>
          <div class="price">
            <h6>{{item.value.price}}:-</h6>
            <p
              v-for="(add,i) in item.value.add"
              :key="`item-add-amount-${i}`"
              v-show="add.price !== 0"
              class="add-price"
            >{{add.price}}:-</p>
          </div>
          <img class="icon" src="@/assets/icons/delete.svg" @click="deleteOrderItemFood(item)" />
        </div>
        <div class="order-items" v-for="(item, i) in drinkOrders" :key="`order-drink-items-${i}`">
          <h6 class="amount">{{item.count > 1 ? item.count : ''}}</h6>
          <div class="dish">
            <h6>{{item.value.productName}}</h6>
            <p>{{item.value.description}}</p>
          </div>
          <h6 class="price">{{item.value.price * item.count}}:-</h6>
          <img class="icon" src="@/assets/icons/delete.svg" @click="deleteOrderItemDrink(item)" />
        </div>
      </section>
      <section class="summery">
        <h6>Totalsumma</h6>
        <h6 class="totalAmount">{{totalAmount}}:-</h6>
        <div class="leave-comment" @click="openLeaveCommentModal">
          <img class="icon" src="@/assets/icons/comment.svg" />
        </div>
        <StandardButton class="desktop btn" :buttonText="'Betala'" @click.native="toEmail" />
      </section>
    </div>
    <transition name="modal">
      <Payment v-if="showPayment" />
    </transition>
      <Email v-if="showEmail"/>
    <LeaveCommentModal v-if="leaveComment" />
  </div>
</template>

<script>
import StandardButton from "@/components/StandardButton.vue";
import Payment from "@/components/Payment.vue";
import Email from "@/components/Email.vue";
import CloseDown from "@/assets/icons/WhiteCross.svg";
import LeaveCommentModal from "@/components/MenuComponents/Card/LeaveCommentModal.vue";

export default {
  components: {
    StandardButton,
    Payment,
    Email,
    LeaveCommentModal
  },
  data: () => ({
    closeDown: CloseDown
  }),
  computed: {
    showTheCart() {
      return this.$store.state.showTheCart;
    },
    orderItems() {
      return this.$store.state.order;
    },
    showPayment() {
      return this.$store.state.showPayment;
    },
    showEmail() {
      return this.$store.state.showEmail;
    },
    leaveComment() {
      return this.$store.state.leaveComment;
    },
    foodOrders() {
      const filtered = [];
      const copy = this.orderItems.foodItems.slice(0);
      for (let i = 0; i < this.orderItems.foodItems.length; i++) {
        let myCount = 0;
        for (let w = 0; w < copy.length; w++) {
          if (
            this.orderItems.foodItems[i].productName === copy[w].productName
          ) {
            if (copy[w].productName === "lunchbuffé") {
              myCount++;
              copy.splice(w, 1, 0);
            } else {
              myCount++;
            }
          }
        }
        if (myCount > 0) {
          const a = new Object();
          a.value = this.orderItems.foodItems[i];
          a.count = myCount;
          filtered.push(a);
        }
      }
      return filtered;
    },
    drinkOrders() {
      const filtered = [];
      const copy = this.orderItems.drinkItems.slice(0);
      for (let i = 0; i < this.orderItems.drinkItems.length; i++) {
        let myCount = 0;
        for (let w = 0; w < copy.length; w++) {
          if (
            this.orderItems.drinkItems[i].productName === copy[w].productName
          ) {
            myCount++;
            copy.splice(w, 1, 0);
          }
        }
        if (myCount > 0) {
          const a = new Object();
          a.value = this.orderItems.drinkItems[i];
          a.count = myCount;
          filtered.push(a);
        }
      }
      return filtered;
    },
    totalAmount() {
      const foodBase = this.orderItems.foodItems
        .map(x => x.price)
        .reduce((a, b) => a + b, 0);
      const drinkBase = this.orderItems.drinkItems
        .map(x => x.price)
        .reduce((a, b) => a + b, 0);
      const addOns = this.orderItems.foodItems
        .map(x => x.add)
        .flat()
        .map(x => x.price)
        .reduce((a, b) => a + b, 0);
      return foodBase + drinkBase + addOns;
    }
  },
  methods: {
    openLeaveCommentModal() {
      this.$store.commit("setLeaveCommentModal", true);
      console.log("setLeaveCommentModal");
    },
    toPayment() {
      console.log('toPayment')  
     this.$store.commit("setShowPayment", true);  
    },
    toEmail() {
      console.log('toEmail')  
      this.$store.state.order.foodItems.length !== 0 ||
      this.$store.state.order.drinkItems.length !== 0
        ? this.$store.commit("setShowEmail", true)
        : "";
      console.log('toEmail')  
    },
    deleteOrderItemFood(item) {
      this.$store.commit(
        "deleteOrderItemFood",
        this.orderItems.foodItems.indexOf(item.value)
      );
    },
    deleteOrderItemDrink(item) {
      this.$store.commit(
        "deleteOrderItemDrink",
        this.orderItems.drinkItems.indexOf(item.value)
      );
    },
    editCartItem(item, i) {
      if (this.$route.path !== "/order") {
        this.$router.push(`${item.value.productName}`);
      }
      this.$store.commit("setShowCart", null);
      this.$store.commit("editCart", true);
      this.$store.commit("setItemToEdit", { item: item.value, index: i });
    },
    closeTheCart() {
      const toggleActiveCart = false;
      this.$store.commit("toggleActiveCart", toggleActiveCart);
    }
  }
};
</script>
