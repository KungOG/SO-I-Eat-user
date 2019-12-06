<template>
  <div class="nav-container" :class="$route.path == '/' && !showMenu ? 'transparent' : ''"> 
    <div class="nav-item" v-for="(icon, i) in iconsMenu" :key="i" v-if="$route.path === '/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div class="nav-item" v-for="(icon, i) in iconsOrder" :key="i" v-if="$route.path === '/order'" >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" :class="selected === icon.name && icon.name !== 'clock' ? 'active-icon' : '' " />
      </router-link>
    </div>
    <div class="nav-item" v-for="(icon, i) in iconsInfo" :key="i" v-if="$route.path === '/info'" >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div class="nav-item" v-for="(icon, i) in iconsOrderItem" :key="i" v-if="$route.path.substring(0, 11) === '/orderitem/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div v-show="showMenu" class="info-menu">
      <div class="info-menu-text">
        <router-link to="/info"><h2>Kontakt</h2></router-link>
        <router-link to="/info"><h2>Om oss</h2></router-link>
        <router-link to="/info"><h2>Villkor</h2></router-link>
      </div>
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
import Logo from '@/assets/icons/LogoNoText.svg';
import FullLogo from '@/assets/icons/FullLogo.svg';
import Cross from '@/assets/icons/WhiteCross.svg';
import ReturnArrow from '@/assets/icons/ReturnArrow.svg';
import axios from 'axios';

export default {
  name: 'navigation',
  data: () => ({
    selected: null,
    iconsMenu: [{icon: FullLogo, urlTo: '/'}, {icon: Info, name: 'info', urlTo: ''}],
    iconsOrder: [{icon: Logo, urlTo: '/'}, {icon: TakeAway, name: 'takeAway', urlTo: '/order'}, {icon: EatHere, name: 'eatHere', urlTo: '/order'}, {icon: Clock, name: 'clock', urlTo: ''}],
    iconsOrderItem: [{icon: Logo, urlTo: '/'}, {icon: Delete, name: 'delete', urlTo: '/order'}],
    iconsInfo: [{icon: ReturnArrow, urlTo: '/'}, {icon: Info, name: 'info', urlTo: ''}],
    showMenu: false,
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
        case 'clock':
          this.showProductionTime();
          break;  
        case 'info':
          this.showMenu = !this.showMenu;
          this.showMenu ? this.iconsMenu[1].icon = Cross : this.iconsMenu[1].icon = Info;
          this.showMenu ? this.iconsInfo[1].icon = Cross : this.iconsInfo[1].icon = Info;
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
    },
    showProductionTime() {
      const url = 'https://so-i-eat-server.herokuapp.com/deliveryTimes';
      axios
        .get(url)
        .then((response) => {
          this.$store.commit('setProductionTime', response.data[0].time);
          this.$store.commit('setShowProductionTime', true);
          setTimeout(() => {
            this.$store.commit('setShowProductionTime', false);
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
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

  .info-menu {
    background: #131313;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 60px;
    display: flex;
    justify-content: center;

    >.info-menu-text {
      text-align: center;
      margin-top: 3rem;

      h2 {
        color: white;
        margin: 50px;
      }
    }
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
