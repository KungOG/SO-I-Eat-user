<template>
  <div class='menu-card' :class="selectedCard === index ? 'activeCard' : ''">
    <div class="image-card" :style="{backgroundImage: 'url(' + getImgUrl() + ')'}">
      <transition name="fade">
        <div class="background-white" v-show="expanded">
          <card-text class="text" :item="item"/>
        </div>
      </transition> 
    </div>
    <transition name="expand">
      <div class="kkk" v-show="expandedmore">
        <card-text class="text" :displayIcons="displayIcons" :item="item" :showAddIcon="showAlternatives"/>
        <card-alternatives v-if="showAlternatives" :proteinItems="item.protein" :showSpice="item.spice"/>
        <card-customize v-if="showCustomize" :ingredients="item.ingredients" />
        <standard-button v-show="showAlternatives" :buttonText="this.showCustomize ? 'stäng': 'redigera'" @click.native = "buttonClick"/>
      </div>
    </transition> 
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
        expanded: true,
        expandedmore: false,
      }
    },
    watch: {
      selectedCard() {
        this.selectedCard !== this.index ? this.showAlternatives = false : this.showAlternatives = true;
        this.selectedCard !== this.index ? this.showCustomize = false : '';
        this.selectedCard === this.index ? this.expanded = false : '';
        this.selectedCard === this.index ? this.expandedmore = true : '';

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
      getImgUrl() {
      return require('@/assets/images/dish.png')
    },
    },
  };
</script>

<style lang="scss">
.menu-card {

  .image-card {
    background-size: cover;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: flex-end;

    .background-white {
      background: white;
    }
  }

  .kkk {
    height: 350px;
    opacity: 1;
  }

  .fade-enter-active, .fade-leave-active {
    transition: transform .8s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
    transform: translateX(400px);
  }

  .expand-enter-active, .expand-leave-active {
    transition: all .8s ease-in-out 1s;
  }
  
  .expand-enter, .expand-leave-to {
    height: 0px;
    opacity: 0;
  }
}

</style>