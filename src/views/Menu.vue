<template>
    <div class='menu'>
      <MenuHeader />
      <MenuFooter />
      <MenuSection />
      <MenuItem />
      <CustomizeMenu />
      <Cart />
    </div>
</template>
<script>
import MenuHeader from '@/components/MenuComponents/MenuHeader.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import MenuSection from '@/components/MenuComponents/MenuSection.vue';
import MenuItem from '@/components/MenuComponents/MenuItem.vue';
import CustomizeMenu from '@/components/MenuComponents/CustomizeMenu.vue';
import Cart from '@/components/MenuComponents/Cart.vue';

export default {
  name: 'menu',
  components: {
    MenuHeader,
    MenuFooter,
    MenuSection,
    MenuItem,
    CustomizeMenu,
    Cart,
  },
};
</script>
