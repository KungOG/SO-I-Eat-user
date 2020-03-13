<template>
  <div class="side-navigation">
    <div class="icon-wrapper">
      <router-link to="/">
        <img :src="require('@/assets/icons/' + icons.logo)" alt="hem" />
      </router-link>
      <transition name="time" mode="out-in">
        <img
          v-if="!showTime"
          :src="require('@/assets/icons/' + icons.clock)"
          alt="info"
          @click="showTheTime"
        />
        <div class="show-time" v-if="showTime" @click="$store.dispatch('getProductionTime')">
          <span>
            Väntetiden är just
            <br />
            nu ca {{productionTime}} min
          </span>
        </div>
      </transition>
    </div>
    <div class="category-wrapper">
      <div class="side-navigation-line" />
      <ul class="side-navigation-container">
        <li class="side-navigation-list" v-for="(category, i) in categories" :key="i">
          <h3
            @click="select(i)"
            :class="selected === i ? 'selectedCategory' : ''"
          >{{category.categoryName}}</h3>
          <div class="line" :class="selected === i ? '-active' : ''" />
        </li>
      </ul>
    </div>
    <div class="navigation-button" @click="showTheCart">
      <div class="cart-icon-wrapper">
        <img :src="require('@/assets/icons/' + icons.imgUrl)" alt="varukorg" />
        <div class="cart-content" :class="activeClass">
          <span>{{numberOfCartItems}}</span>
        </div>
      </div>
      <span>min beställning</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    showTime: false,
    icons: {
      logo: "LogoNoText.svg",
      clock: "Clock.svg",
      imgUrl: "Cart.svg"
    },
    selected: 0,
    activeClass: ""
  }),
  watch: {
    numberOfCartItems() {
      this.activeClass = "-active";
      setTimeout(() => {
        this.activeClass = "";
      }, 500);
    }
  },
  computed: {
    productionTime() {
      return this.$store.state.productionTime;
    },
    numberOfCartItems() {
      return (
        this.$store.state.order.foodItems.length +
        this.$store.state.order.drinkItems.length
      );
    }
  },
  methods: {
    showTheCart() {
      const toggleActiveCart = true;
      this.$store.commit("toggleActiveCart", toggleActiveCart);
    },
    select(value) {
      this.selected = value;
      this.$emit("setSelected", value);
      this.$emit("setSelectedCard", -1);
    },
    showTheTime() {
      this.showTime = !this.showTime;
      setTimeout(() => {
        this.showTime = !this.showTime;
      }, 3000);
    }
  }
};
</script>
