<template>
  <div class="nav-container" :class="$route.path == '/' ? 'transparent' : ''"> 
    <div class="nav-item" v-for="(icon, i) in icons" :key="i" >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
import EatHere from '@/assets/icons/EatHere.svg';
import TakeAway from '@/assets/icons/TakeAway.svg';
import Clock from '@/assets/icons/Clock.svg';
import Delete from '@/assets/icons/WhiteCross.svg';
import Info from '@/assets/icons/Info.svg';
import Maps from '@/assets/icons/Maps.svg';
import Logo from '@/assets/icons/logga.svg';

export default {
  name: 'navigation',
  data: () => ({
    selected: null,
    iconsMenu: [{icon: Maps, urlTo: '/contact'}, {icon: Logo, urlTo: '/'}, {icon: Info, urlTo: '/about'}],
    iconsOrder: [{icon: Logo, urlTo: '/'}, {icon: TakeAway, urlTo: '/order'}, {icon: EatHere, urlTo: '/order'}, {icon: Clock, urlTo: '/'}],
    iconsOrderItem: [{icon: Logo, urlTo: '/'}, {icon: Delete, urlTo: '/order'}],
  }),
  computed: {
    icons() {
      if (this.$route.path == '/order') {
        return this.iconsOrder;
      }
      if (this.$route.path == '/') {
        return this.iconsMenu;
      }
      if (this.$route.path == '/menu') {
        return this.iconsMenu;
      }
      if (this.$route.path.substring(0, 11) == '/orderitem/') {
        return this.iconsOrderItem;
      }
    }
  },
};
</script>

<style lang="scss">
.nav-container {
  display: flex;
  width: auto;
  background-color: #131313;
  justify-content: space-between;
  align-items: center;
  height: 60px;  
  width: 376px;
  position: fixed;

  &.transparent {
      background-color: transparent;
  }
}

.nav-item {
  margin: 20px;
}
</style>
