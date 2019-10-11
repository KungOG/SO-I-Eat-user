<template> 
  <div class='content-text-wrapper'>
    <div class='dish-title'>
      <div class='dish-name'>
        <h3>Mat namn</h3>
        <div class="line" />
      </div>
      <h4>110:-</h4>
    </div>
    <div class='dish-content'>
      <h4>1</h4>
      <p>Gröncurrygryta med kycklingbiff, limeblad, chili, bambuskott, thaibasilika, grönsaker och kokosmjölk</p>
    </div>
    <Icons />
  </div> 
</template>

<script>
import Icons from './Icons.vue'
export default {
  components: {
    Icons
  }
}
</script>