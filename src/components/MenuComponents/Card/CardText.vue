<template>
  <div class="content-text-wrapper">
    <div class="dish-name">
      <h3>{{item.productName}}</h3>
    </div>
    <div class="dish-price">
      <h4>{{item.price}}:-</h4>
    </div>
    <div class="dish-number">
      <h4>{{item.productNr}}</h4>
    </div>
    <div class="dish-content">
      <p>{{item.description}}</p>
      <Icons v-if="displayIcons" :proteinItems="item.protein" />
    </div>
    <div class="content-filler" />
  </div>
</template>

<script>
import Icons from "./Icons.vue";

export default {
  name: "card-text",
  components: {
    Icons
  },

  props: {
    item: {
      type: Object,
      required: false
    },
    displayIcons: {
      type: Boolean,
      required: true
    },
    showAddIcon: {
      type: Boolean,
      default: true
    }
  }
};
</script>
