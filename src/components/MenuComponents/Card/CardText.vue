<template> 
  <div class='content-text-wrapper'>
    <div class='dish-title'>
      <div class='dish-name'>
        <h3>{{item.name}}</h3>
        <div class="line" />
      </div>
      <h4>{{item.price}}:-</h4>
    </div>
    <div class='dish-content'>
      <h4>1</h4>
      <p>{{item.description}}</p>
    </div>
    <Icons :proteinItems="item.protein"/>
  </div>
</template>

<script>
import Icons from './Icons.vue';

export default {
  components: {
    Icons,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
