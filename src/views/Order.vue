<template>
  <div class='order'>
    <scroll-navigation class="mobile" :categories="categories" @setSelected="setSelected"/>
    <side-navigation class="desktop" :categories="categories" @setSelected="setSelected" @setSelectedCard="setSelectedCard"/>
    <div class="card-wrapper">
      <div v-for="(item, i) in filteredMenuitems" :key="`filtered-menu-items-${i}`" v-show="selected !== 7">
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
        v-show="selected === 7"
        v-for="drink in drinks"
        :key="`dink-card-${drink.productNr}`"
        :drink="drink"
        @click.native="addDrinkToCart(drink)"
      />    
    </div>
    <menu-footer @click.native="$router.push('/orderitem/cart')" :text="footerText" class="mobile"/>
    <cart class="desktop"/>
    <Modal v-if="showModal"/>
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
  },
  data: () => ({
    selected: 0,
    displayIcons: false,
    selectedCard: -1,
    footerText: {text: 'min beställning'},
  }),
  beforeMount() {
    this.$store.dispatch('getMenuItems');
    this.$store.dispatch('getCategories');
    if(this.$store.state.open === false) {
      this.$store.commit('setShowModal', true);
      this.$store.commit('setShowTextModal', true);
      this.$store.commit('setModalText', 'Tyvärr, vi har stängt');
    }
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
    orderState() {
      return this.$store.state.orderState;
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
    },
    openModal() {
      this.$store.commit('setShowModal', true);
    },
    openCart() {
      this.$store.commit('setShowCart', true)
    }
  },
};
</script>
