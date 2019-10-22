<template>
    <div class='menu-card' :class="selectedCard === index ? 'activeCard' : ''">
      <card-image class="image"/>
      <card-text class="text" :displayIcons="displayIcons" :item="item" :showAddIcon="showAlternatives"/>
      <card-alternatives v-if="showAlternatives" :proteinItems="item.protein"/>
      <card-customize v-if="showCustomize" :ingredients="item.ingredients" />
      <standard-button v-show="showAlternatives" :buttonText="this.showCustomize ? 'stäng': 'redigera'" @click.native = "buttonClick"/>
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
    data() {
      return {
        showAlternatives: false,
        showCustomize: false,
      }
    },
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
      buttonClick() {
        this.showCustomize = !this.showCustomize;
      },
    },
  };
</script>
