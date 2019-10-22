<template>
    <div class='cart' :class="showCart ? '-activeCart' : ''">
      <h1>Cart Component</h1>
    </div>
</template>

<script>
export default {
  props: {
    showCart: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
