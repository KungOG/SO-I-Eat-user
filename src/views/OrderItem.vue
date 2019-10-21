<template>
  <div>
    <menu-card :item="item" :displayIcons="displayIcons" :selectedCard="1" :index="1"/>
    <menu-footer :text="footerText" class="mobile"/>
  </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';

export default {
  components: {
    MenuCard,
    MenuFooter,
  },
  data: () => ({
    displayIcons: false,
    footerText: {text: 'lägg till i beställning', sum: 0}
  }),
  computed: {
    item() {
      return this.$store.getters.getOrderItem(this.$route.params.id);
    },
  },
};
</script>
