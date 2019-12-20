<template>
  <div class="lunch-section"> 
    <div class="lunch-content">
      <div>
        <h3>Lunchbuffé</h3>
        <h4>95:-</h4>
      </div>
      <p>Smårätter, varmrätter och sallad. Dryck, kaffe och kaka ingår.</p>
      <p>Serveras vardagar 11-14.</p>
    </div>
  </div>
</template>

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

        h3 {
          line-height: 1;
        }

        h4 {
          line-height: 1;
        }

      }
    }
  } 
</style>