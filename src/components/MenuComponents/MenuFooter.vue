<template>
    <div class='menu-footer'>
      <h5>Menu Footer Component</h5>
    </div>
</template>

<script>
export default {
  name: 'menu-footer',
};
</script>

<style lang="scss">
  .menu-footer {
    height: 60px;
    background: #AA0909;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    bottom: 0;
    width: 100%;
  }
</style>
