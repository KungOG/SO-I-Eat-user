<template>
  <div class="info">
    <NavigationBar class="mobile" />
    <div class="component-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "info",
  components: {
    NavigationBar
  }
};
</script>
