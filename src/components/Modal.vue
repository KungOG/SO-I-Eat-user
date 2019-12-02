<template>
  <div class='modal'>
    <section class='modal-wrapper'>
      <section class="modal-content">
        <div class='content' v-if="showInputModal">
          <h5>Vilket bord sitter du vid?</h5>
          <input
            v-model="tableInput"
            type="text"
            maxlength="2"
            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
        </div>
        <div class='content' v-if="showTextModal">
          <h5>{{modalText}}</h5>
        </div>
        <div class="content" :class="editCart ? 'desktop' : ''" v-if="editCart">
          <MenuCard 
          :displayIcons="displayIcons"
          :item="originalOrderItem"
          :selectedCard="1"
          :index="1"
          />
        </div>
      </section>
      <section class='modal-buttons'>
        <StandardButton v-if="!editCart && open " @click.native="modalAction" />
        <StandardButton v-if="editCart && open" buttonText="Uppdatera" @click.native="updateCartItem" />
        <StandardButton v-if="!open" buttonText="OK" @click.native="closedBusiness" />
      </section>
      <img class='modal-cross-icon' :src="CloseDown" />
    </section>
    <div v-if="!editCart" class='home modal-close-button' @click="cancelModal" />
    <div v-if="editCart" class='cart modal-close-button' @click="minimizeModal" />
    <div v-if="!open" class='cart modal-close-button' @click="closedBusiness" />
  </div>
</template>

<script>
import StandardButton from './StandardButton.vue';
import CloseDown from '@/assets/icons/WhiteCross.svg';
import MenuCard from '@/components/MenuComponents/MenuCard.vue';

export default {
  name: 'modal',
  components: {
    StandardButton,
    MenuCard,
  },
  props: {
    showAbort: {
      type: Boolean,
    },
  },
  data: () => ({
    tableInput: '',
    CloseDown: CloseDown,
    displayIcons: false,
  }),
  computed: {
    modalText() {
      return this.$store.state.modalText;
    },
    showTextModal() {
      return this.$store.state.showTextModal;
    },
    showInputModal() {
      return this.$store.state.showInputModal;
    },
    editCart() {
      return this.$store.state.editCart;
    },
    originalOrderItem() {
      return this.$store.getters.getOriginalMenuItem;
    },
    open() {
      return this.$store.state.open;
    },
  },
  methods: {
    modalAction() {
      this.$store.commit('setTableInput', this.tableInput);
      this.$store.commit('setShowInputModal', false);
      this.$store.commit('setShowTextModal', false);
      this.$store.commit('setShowModal', false);
    },
    cancelModal() {
      this.$store.commit('setShowInputModal', false);
      this.$store.commit('setShowModal', false);
      this.$router.push('/');
    },
    minimizeModal() {
      this.$store.commit('setShowModal', false);
      this.$store.commit('editCart', false);
      this.$store.commit('resetItemToEdit');
    },
    updateCartItem() {
      this.$store.commit('setShowModal', false);
      this.$store.commit('editCart', false);
      this.$store.commit('updateCartItem');
      this.$store.commit('resetItemToEdit');
    },
    closedBusiness() {
      this.$store.commit('setShowModal', false);
      this.$store.commit('setShowTextModal', false);
      this.$store.commit('setModalText', null);
      this.$router.push('/');
    },
  },
};
</script>
