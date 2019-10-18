<template>
    <div class='menu-card'>
      <card-image class="image"/>
      <card-text class="text" :displayIcons="displayIcons" :item="item"/>
      <card-alternatives :proteinItems="item.protein"/>
      <standard-button/>
    </div>
</template>

<script>
import CardImage from './Card/CardImage.vue';
import CardText from './Card/CardText.vue';
import CardAlternatives from '@/components/MenuComponents/Card/CardAlternatives.vue';
import StandardButton from '@/components/StandardButton.vue';

export default {
  name: 'menu-card',
  components: {
    CardText,
    CardImage,
    CardAlternatives,
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
  }
};
</script>
