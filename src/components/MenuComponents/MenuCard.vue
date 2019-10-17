<template>
    <div class='menu-card'>
      <card-image class="image"/>
      <card-text class="text" :displayIcons="displayIcons" :item="item"/>
    </div>
</template>

<script>
import CardImage from './Card/CardImage.vue';
import CardText from './Card/CardText.vue';

export default {
  name: 'menu-card',
  components: {
    CardText,
    CardImage,
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
