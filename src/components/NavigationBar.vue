<template>
  <div class="nav-container" :class="$route.path == '/' ? 'transparent' : ''"> 
    <div class="nav-item" v-for="(icon, i) in iconsMenu" :key="i" v-if="$route.path === '/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div class="nav-item" v-for="(icon, i) in iconsOrder" :key="i" v-if="$route.path == '/order'" >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" :class="selected === icon.name ? 'active-icon' : '' " />
      </router-link>
    </div>
    <div class="nav-item" v-for="(icon, i) in iconsOrderItem" :key="i" v-if="$route.path.substring(0, 11) == '/orderitem/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
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
    iconsOrder: [{icon: Logo, urlTo: '/'}, {icon: TakeAway, name: 'takeAway', urlTo: '/order'}, {icon: EatHere, name: 'eatHere', urlTo: '/order'}, {icon: Clock, urlTo: '/'}],
    iconsOrderItem: [{icon: Logo, urlTo: '/'}, {icon: Delete, name: 'delete', urlTo: '/order'}],
  }),
  computed: {
    editCart() {
      return this.$store.state.editCart;
    },
  },
  methods: {
    clicked(icon) {
      this.selected = icon;
      switch(icon) {
        case 'eatHere':
          this.$store.commit('setShowModal', true);
          this.$store.commit('setShowInputModal', true);
          this.$store.commit('setOrderState', icon)
          break;
        case 'takeAway':
          this.$store.commit('setOrderState', icon)
          this.$store.commit('setTableInput', 'take away')
          break;
        case 'delete':
          this.closeItemToEdit();
          break;  
      }
    },
    closeItemToEdit() {
      if(this.editCart) {
      this.$store.commit('editCart', false);
      this.$store.commit('setShowCart', true);
      this.$store.commit('resetItemToEdit');
      this.iconsOrderItem[1].urlTo = '/orderitem/cart';
      } else {
        this.iconsOrderItem[1].urlTo = '/order';
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

  .active-icon {
    background: pink;
    pointer-events: none;
  }
}
</style>
