<template>
    <div class='menu-card' @click="$emit('setSelectedCard', index)" :class="selectedCard === index ? 'activeCard' : ''">
      <card-image class="image"/>
      <card-text class="text"
        :displayIcons="displayIcons"
        :item="item"
        :showAddIcon="showAlternatives"/>
      <card-alternatives v-if="showAlternatives"
        :proteinItems="item.protein"
        :showSpice="item.spice"
        @setProtein="setProtein"
        @setSpice="setSpice"/>
      <card-customize 
        v-if="showCustomize"
        :ingredients="item.ingredients"
        @setRemovedIngredients="removeIngredient"
        @setAddedOption="addOption"/>
      <div class="button-wrapper">
        <standard-button
          v-show="showAlternatives"
          :buttonText="this.showCustomize ? 'stäng': 'redigera'"
          @click.native="showCustomize = !showCustomize"/>
        <standard-button
          v-show="showAlternatives"
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
    orderDetails: {
      protein: '',
      spice: null,
      add: [],
      remove: [],
    },
  }),
  watch: {
    selectedCard() {
      this.selectedCard !== this.index ? this.showAlternatives = false : this.showAlternatives = true;
      this.selectedCard !== this.index ? this.showCustomize = false : '';
    },
  },
  mounted() {
      this.selectedCard === this.index ? this.showAlternatives = true : this.showAlternatives = false;
  },
  methods: {
    showAlternativesOption() {
      this.showAlternatives = true;
    },
    addItemToCart() {
      this.$store.dispatch('setOrderItems', {items1: this.orderDetails, items2: this.item});
      this.$emit('setSelectedCard', -1);
    },
    setProtein(item) {
      this.orderDetails.protein = item;
    },
    setSpice(item) {
      this.orderDetails.spice = item +1;
    },
    removeIngredient(ingredient) {
      const remove = this.orderDetails.remove;
      remove.includes(ingredient) ? remove.splice(remove.indexOf(ingredient), 1) : remove.push(ingredient);
    },
    addOption(option) {
      const add = this.orderDetails.add;
      add.includes(option) ? add.splice(add.indexOf(option), 1) : add.push(option);
    },
  },
};
</script>
