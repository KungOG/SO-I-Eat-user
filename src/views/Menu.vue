<template>
    <div class='menu'>
      <MenuHeader />
      <MenuSection />
      <MenuFooter />
    </div>
</template>
<script>
import MenuHeader from '@/components/MenuComponents/MenuHeader.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import MenuSection from '@/components/MenuComponents/MenuSection.vue';

export default {
  name: 'menu',
  components: {
    MenuHeader,
    MenuFooter,
    MenuSection,
  },
};
</script>
