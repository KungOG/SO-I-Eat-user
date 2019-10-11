<template>
    <div class='menu-card'>
      <div class='wrapper'>
        <CardImage />
        <CardText />
      </div>
    </div>
</template>

<script>
import CardText from './Card/CardText.vue';
import CardImage from './Card/CardImage.vue';

export default {
  name: 'menu-card',
  components: {
    CardText,
    CardImage,
  }
};
</script>
