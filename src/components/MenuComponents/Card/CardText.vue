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
    <Icons v-if="displayIcons" :proteinItems="item.protein"/>
    <div class="icon-container">
      <Add v-show="!showAddIcon" class="add-icon"/>
    </div>
  </div>
</template>

<script>
import Icons from './Icons.vue';
import Add from './Add.vue';

export default {
  name: 'card-text',
  components: {
    Icons,
    Add,
  },

  props: {
    item: {
      type: Object,
      required: false,
    },
    displayIcons: {
      type: Boolean,
      required: true,
    },
    showAddIcon: {
      type: Boolean,
      default: true,
    },
  },
};

</script>
