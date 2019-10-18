<template>
    <div class='menu-card'>
      <card-image class="image"/>
      <card-text class="text" :displayIcons="displayIcons" :item="item" @showalternatives="showAlternativesOption"/>
      <card-alternatives v-if="showAlternatives" :proteinItems="item.protein"/>
      <card-customize :ingredients="item.ingredients" />
      <standard-button/>
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
  },
    data() {
      return {
        showAlternatives: false,
        showCustomize: false
      }
    },
    methods: {
      showAlternativesOption() {
        this.showAlternatives = true
      }
    }
  }
</script>
