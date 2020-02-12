<template>
  <div class="lunch-section">
    <div class="lunch-content">
      <div>
        <h3>{{lunchItem.productName}}</h3>
        <h4>{{lunchItem.price}}:-</h4>
      </div>
      <p>{{lunchItem.description}}</p>
      <p>Serveras vardagar 11-14.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lunchItem() {
      if (this.$store.getters.getLunchItem[0]) {
        return this.$store.getters.getLunchItem[0];
      } else {
        return {productName: 'Lunchbuffé'};
      }
    },
  },
};
</script>

<style lang="scss">
.lunch-section {
  background: white;
  padding: 1.5rem;
  margin-bottom: .7rem;

  @media (min-width: 992px) {
    padding: 2.5rem 4rem;
  }

  .lunch-content {
    border: 1px solid #c4c4c4;;
    padding: 1.5rem;

    p:nth-child(2) {
      margin-top: 10px;
    }

    div {
      display: flex;
      justify-content: space-between;

      h3, h4 {
        line-height: 1;
      }
    }
  }
}
</style>
