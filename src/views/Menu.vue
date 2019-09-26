<template>
    <div class='menu'>
      <MenuHeader />
      <MenuFooter />
      <MenuCard />
      <MenuItem />
      <CustomizeMenu />
      <Cart />
    </div>
</template>
<script>
import MenuHeader from '@/components/MenuComponents/MenuHeader.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import MenuItem from '@/components/MenuComponents/MenuItem.vue';
import CustomizeMenu from '@/components/MenuComponents/CustomizeMenu.vue';
import Cart from '@/components/MenuComponents/Cart.vue';

export default {
  name: 'menu',
  components: {
    MenuHeader,
    MenuFooter,
    MenuCard,
    MenuItem,
    CustomizeMenu,
    Cart,
  },
};
</script>
