<template>
    <div class="standard-button">
      <a href="#">{{buttonText}}</a>
    </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'OK',
    },
  },
};
</script>

<style lang="scss">
.standard-button {
  border: 1px solid #AA0909;
  border-radius: 3px;
  width: 115px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  > a {
    color: #AA0909;
  }
}
</style>
