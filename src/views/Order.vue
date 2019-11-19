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
          @setModalText="setModalText"
          @click.native="routeToOrderItem(item.productName, i)"
        />
        <MenuCard
          class="desktop"
          :displayIcons="displayIcons"
          :item="item"
          :selectedCard="selectedCard"
          :index="i"
          @setModalText="setModalText"
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
    <menu-footer @click.native="$router.push('/orderitem/varukorg')" :text="footerText" class="mobile"/>
    <cart class="desktop"/>
    <modal v-if="showTextModal" :showAbort="!showAbort">
      <h5>{{modalHeader}}</h5>
      <p>{{modalText}}</p>
    </modal>
    <modal class="mobile" v-if="orderState === 'eatHere'" :showAbort="showAbort" @sendTableInput="sendTableInput" >
      <h5>Vilket bord sitter du vid?</h5>
      <input
        v-model="tableInput"
        type="text"
        maxlength="2"
        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
    </modal>
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
    showTextModal: false,
    showInputModal: false,
    modalHeader: '',
    modalText: 'göra en beställning?',
    showAbort: true,
    tableInput: null,
  }),
  beforeMount() {
    this.$store.dispatch('getMenuItems');
    this.$store.dispatch('getCategories');
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
    sendTableInput() {
      this.$store.commit('setTableInput', this.tableInput);
      this.$store.commit('setOrderState', null);
    },
    setModalText(text) {
      console.log('hhh',text)
      this.modalHeader = text;
      this.showTextModal = true;
    },
  },
};
</script>
