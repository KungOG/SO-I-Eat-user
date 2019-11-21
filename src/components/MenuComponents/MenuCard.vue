<template>
    <div
    class='menu-card'
    @click="$emit('setSelectedCard', index)"
    :class="[selectedCard === index ? 'activeCard' : '', editCart ? 'active-edit-card' : '']"
    >
      <card-image class="image"/>
      <card-text class="text"
        :displayIcons="displayIcons"
        :item="item"
        :showAddIcon="showAlternatives"/>
      <card-alternatives v-if="showAlternatives"
        :proteinItems="item.protein"
        :showSpice="item.spice"
        />
      <card-customize 
        v-if="showCustomize"
        :ingredients="item.ingredients"
        />
      <div class="button-wrapper">
        <standard-button
          v-show="showAlternatives && !editCart"
          :buttonText="this.showCustomize ? 'stäng': 'redigera'"
          @click.native="showCustomize = !showCustomize"/>
        <standard-button
          v-show="showAlternatives && !editCart"
          buttonText="Lägg till"
          class="desktop"
          @click.native.stop = "addItemToCart"/>
      </div>
    </div>
</template>

<script>
import CardImage from './Card/CardImage.vue';
import CardText from './Card/CardText.vue';
import CardAlternatives from '@/components/MenuComponents/Card/CardAlternatives.vue';
import CardCustomize from '@/components/MenuComponents/Card/CardCustomize.vue';
import StandardButton from '@/components/StandardButton.vue';

export default {
  name: 'menu-card',
  components: {
    CardText,
    CardImage,
    CardAlternatives,
    CardCustomize,
    StandardButton,
  },
  props: {
    item: {
      type: Object
    },
    displayIcons: {
      type: Boolean,
      required: true
    },
    selectedCard: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  data: () => ({
    showAlternatives: false,
    showCustomize: false,
  }),
  computed: {
    activeProtein() {
      return this.$store.state.orderDetails.protein;
    },
    activeSpice() {
      return this.$store.state.orderDetails.spice;
    },
    editCart() {
      return this.$store.state.editCart;
    },
  },
  watch: {
    selectedCard() {
      this.selectedCard !== this.index ? this.showAlternatives = false : this.showAlternatives = true;
      this.selectedCard !== this.index ? this.showCustomize = false : '';
    },
  },
  mounted() {
      this.selectedCard === this.index ? this.showAlternatives = true : this.showAlternatives = false;
      this.editCart ? this.showCustomize = true : '';
  },
  methods: {
    showAlternativesOption() {
      this.showAlternatives = true;
    },
    addItemToCart() {
      if(this.activeProtein === '' && this.activeSpice === null) {
        this.$store.commit('setModalText', 'ange dina val av huvudingredients och styrka');
        this.$store.commit('setShowTextModal', true);
        this.$store.commit('setShowModal', true);
      } else if (this.activeSpice === null) {
        this.$store.commit('setModalText', 'ange ditt val av styrka');
        this.$store.commit('setShowTextModal', true);
        this.$store.commit('setShowModal', true);
      } else if(this.activeProtein === '') {
        this.$store.commit('setModalText', 'ange ditt val av huvudingredients');
        this.$store.commit('setShowTextModal', true);
        this.$store.commit('setShowModal', true);
      } else {
        this.$store.dispatch('setOrderItemsFood', this.item);
      }
      this.$emit('setSelectedCard', -1);
    },
  },
};
</script>
