<template>
  <div class='order'>
    <scroll-navigation
      class="mobile"
      :categories="categories"
      @setSelected="setSelected"
    />
    <side-navigation
      class="desktop"
      :categories="categories"
      @setSelected="setSelected"
      @setSelectedCard="setSelectedCard"
      @toggleActiveCart="setSelectedCard"
    />
    <div class="card-wrapper">
      <div class="card-item"
        v-for="(item, i) in filteredMenuitems"
        :key="`filtered-menu-items-${i}`"
        v-show="selected !== 7">
        <MenuCard
          class="mobile"
          :displayIcons="displayIcons"
          :item="item"
          :selectedCard="selectedCard"
          :index="i"
          @click.native="routeToOrderItem(item.productName, i)"
        />
        <MenuCard
          class="desktop"
          :displayIcons="displayIcons"
          :item="item"
          :selectedCard="selectedCard"
          :index="i"
          @setSelectedCard="setSelectedCard"
        />
      </div>
      <DrinkCard
        v-if="selected === 7 && drink.active === true"
        v-for="drink in drinks"
        :key="`drink-card-${drink.productNr}`"
        :drink="drink"
        :activeClass="selectedDrink === drink.productNr ? activeClass : ''"
        @click.native="addDrinkToCart(drink)"
      />
    </div>
    <menu-footer
      @click.native="$router.push('/orderitem/cart')"
      :text="footerText"
      class="mobile"
    />
    <Cart class="desktop"/>
    <div class="lunch-btn mobile" v-if="isItLunchTime" @click="showLunchModal = true">
      <ul>
        <li>L</li>
        <li>U</li>
        <li>N</li>
        <li>C</li>
        <li>H</li>
      </ul>
    </div>
    <transition name="modal">
      <Modal v-if="showModal" :class="{'-active' : editCart}" />
    </transition>
    <transition name="modal">
      <LunchModal
        class="mobile"
        v-if="showLunchModal && isItLunchTime"
        @closeLunchModal="showLunchModal = false"
      />
    </transition>
  </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import ScrollNavigation from '@/components/MenuComponents/ScrollNavigation.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import SideNavigation from '@/components/SideNavigation.vue';
import Cart from '@/components/MenuComponents/Cart.vue';
import DrinkCard from '@/components/MenuComponents/DrinkCard.vue';
import Modal from '@/components/Modal.vue';
import LunchModal from '@/components/LunchModal.vue';

export default {
  name: 'order',
  components: {
    MenuCard,
    ScrollNavigation,
    SideNavigation,
    MenuFooter,
    Cart,
    DrinkCard,
    Modal,
    LunchModal,
  },
  data: () => ({
    selected: 0,
    selectedDrink: null,
    displayIcons: false,
    selectedCard: -1,
    footerText: { text: 'min beställning' },
    showLunchModal: false,
    activeClass: '',
  }),
  beforeMount() {
    this.$store.dispatch('getMenuItems');
    this.$store.dispatch('getCategories');
    if (this.$store.state.open === false) {
      this.$store.commit('setShowModal', true);
      this.$store.commit('setShowTextModal', true);
      this.$store.commit('setModalText', 'Tyvärr, vi har stängt');
    }
  },
  mounted() {
    setTimeout(() => {
      if(this.$store.state.order.table === null && this.$store.state.open === true){
        this.$store.commit('setShowModal', true);
        this.$store.commit('setShowInputModal', true);
      }
    }, 1000);
  },
  computed: {
    sortedMenuItems() {
      return this.$store.getters.sortedMenuItems;
    },
    drinks() {
      return this.sortedMenuItems.filter((item) => item.category === 7).reverse();
    },
    filteredMenuitems() {
      return this.sortedMenuItems.filter((item) => item.category === this.selected).reverse();
    },
    categories() {
      return this.$store.state.categories;
    },
    editCart() {
      return this.$store.state.editCart;
    },
    itemToEdit() {
      return this.$store.state.itemToEdit;
    },
    allMenuItems() {
      return this.$store.state.menuItems;
    },
    showModal() {
      return this.$store.state.showModal;
    },
    isItLunchTime() {
      const d = new Date();
      const day = d.getDay()
      let currentTime = Number(d.getHours() + '.' + d.getMinutes());
      if (currentTime > Number(this.$store.state.lunchHour.open) && currentTime < Number(this.$store.state.lunchHour.close)) {
        if (this.$store.state.open && this.$store.state.order.table !== 'take away' && day > 0 && day < 6) {
          return true;
         } else {
           return false;
         }
      } else {
        return false;
      }
    },
  },
  watch: {
    itemToEdit() {
      this.editCart ? this.openModal() : console.log('inte edit')
    },
  },
  methods: {
    routeToOrderItem(id, i) {
      this.selectedCard = i;
      this.$router.push(`orderitem/${id}`);
    },
    setSelected(i) {
      this.selected = i;
    },
    setSelectedCard(i) {
      this.selectedCard = i;
    },
    addDrinkToCart(drink) {
      this.$store.dispatch('setOrderItemsDrink', drink);
      this.selectedDrink = drink.productNr;
      this.activeClass = "-active";
      setTimeout(() => {
        this.activeClass = "";
      }, 500);
    },
    openModal() {
      this.$store.commit('setShowModal', true);
    },
    openCart() {
      this.$store.commit('setShowCart', true)
    },
  },
};
</script>
