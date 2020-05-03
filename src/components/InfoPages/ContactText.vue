<template>
  <div class="contact-text-wrapper">
    <p>
      Öppet tis-sön 11-21
      <br />Lunch tis-fre 11-15
    </p>
    <hr />
    <p>
      Kustvägen 46
      <br />312 60 Mellbystrand
    </p>
    <a class="phone-number" href="tel:+46 430 28300">+46 430 28300</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact-text-wrapper {
  margin: 2rem 2rem;
  text-align: center;
  background: white;

  > hr {
    margin: 1.5rem 1.5rem;
    border: 0.5px solid #c4c4c4;
  }

  > .phone-number {
    color: #aa0909;
  }
}
</style>
