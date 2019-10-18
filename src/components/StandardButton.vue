<template>
    <div class="standard-button">
      <a href="#">Okej</a>  
    </div>
</template>

<script>
export default {
  props: {
    proteinItems: {
      type: Array,
    },
  },
}
</script>

<style lang="scss">
    .standard-button {
        border: 1px solid #AA0909;
        border-radius: 5px;
        width: 115px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        > a {
            color: #AA0909;
        }
    }
</style>
