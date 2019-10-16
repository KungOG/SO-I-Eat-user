<template> 
  <div class='content-text-wrapper'>
      <div class='dish-name'>
        <h3>{{item.name}}</h3>
      </div>
      <div class='dish-price'>
        <h4>{{item.price}}:-</h4>
      </div>
      <div class='dish-number'>
        <h4>{{item.id}}</h4>
      </div>
    <div class='dish-content'>
      <p>{{item.description}}</p>
    </div>
    <div class="content-filler" />
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
