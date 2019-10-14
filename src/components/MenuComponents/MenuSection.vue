<template>
    <div class='menu-card'>
      <div class='wrapper'>
        <CardText />
      </div>
    </div>
</template>

<script>
import CardText from './Card/CardText.vue';

export default {
  name: 'menu-card',
  components: {
    CardText,
  }
};
</script>
