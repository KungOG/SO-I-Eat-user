<template>
  <div class="nav-container"
    :class="[$route.path == '/' &&
    !showMenu ? 'transparent' : '', $route.path === '/' ? 'home' : '']">
    <div class="nav-item" v-for="(icon, i) in iconsMenu" :key="i" v-if="$route.path === '/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div class="nav-item"
      v-for="(icon, i) in iconsOrder"
      :key="i"
      v-if="$route.path === '/order'" >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon"
          @click="clicked(icon.name)"
          :class="selected === icon.name && icon.name !== 'clock' ? 'active-icon' : '' " />
      </router-link>
    </div>
    <div class="nav-item"
      v-for="(icon, i) in iconsInfo"
      :key="i" v-if="$route.path === '/info' || $route.path === '/contact' || $route.path === '/terms' || $route.path === '/about'" >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div class="nav-item"
      v-for="(icon, i) in iconsOrderItem"
      :key="i"
      v-if="$route.path.substring(0, 11) === '/orderitem/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div v-show="showMenu" class="info-menu">
      <div class="icon-wrapper">
        <img :src="require('@/assets/icons/' + imgUrl)" @click="showMenu = false" />
      </div>
      <div class="info-menu-text" @click="showMenu = false">
        <router-link to="/contact"><h2>Kontakt</h2></router-link>
        <router-link to="/about"><h2>Om oss</h2></router-link>
        <router-link to="/terms"><h2>Villkor</h2></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EatHere from '@/assets/icons/EatHere.svg';
import EatHereActive from '@/assets/icons/EatHereActive.svg';
import TakeAway from '@/assets/icons/TakeAway.svg';
import TakeAwayActive from '@/assets/icons/TakeAwayActive.svg';
import Clock from '@/assets/icons/Clock.svg';
import Delete from '@/assets/icons/WhiteCross.svg';
import Info from '@/assets/icons/Info.svg';
import Logo from '@/assets/icons/LogoNoText.svg';
import FullLogo from '@/assets/icons/FullLogo.svg';
import ReturnArrow from '@/assets/icons/ReturnArrow.svg';

export default {
  name: 'navigation',
  data: () => ({
    selected: null,
    iconsMenu: [{ icon: FullLogo, name: 'logo', urlTo: '/' }, { icon: Info, name: 'info', urlTo: '' }],
    iconsOrder: [{ icon: Logo, urlTo: '/' }, { icon: TakeAway, name: 'takeAway', urlTo: '/order' }, { icon: EatHere, active: EatHereActive, name: 'eatHere', urlTo: '/order' }, { icon: Clock, name: 'clock', urlTo: '' }],
    iconsOrderItem: [{ icon: Logo, urlTo: '/' }, { icon: Delete, name: 'delete', urlTo: '/order' }],
    iconsInfo: [{ icon: ReturnArrow, urlTo: '/' }, { icon: Info, name: 'info', urlTo: '' }],
    showMenu: false,
    imgUrl: 'WhiteCross.svg',
  }),
  computed: {
    editCart() {
      return this.$store.state.editCart;
    },
    table() {
      return this.$store.state.order.table;
    },
  },
  beforeMount() {
    this.table === 'take away' ? this.iconsOrder[1].icon = TakeAwayActive : this.iconsOrder[1].icon = TakeAway;
    this.table !== 'take away' ? this.iconsOrder[2].icon = EatHereActive : this.iconsOrder[2].icon = EatHere;
  },
  watch: {
    table() {
      this.table === 'take away' ? this.iconsOrder[1].icon = TakeAwayActive : this.iconsOrder[1].icon = TakeAway;
      this.table !== 'take away' ? this.iconsOrder[2].icon = EatHereActive : this.iconsOrder[2].icon = EatHere;
    },
  },
  methods: {
    clicked(icon) {
      this.selected = icon;
      switch(icon) {
        case 'eatHere':
          this.$store.commit('setShowModal', true);
          this.$store.commit('setShowInputModal', true);
          this.$store.commit('setOrderState', icon);
          break;
        case 'takeAway':
          this.$store.commit('setOrderState', icon);
          this.$store.commit('setTableInput', 'take away');
          break;
        case 'delete':
          this.closeItemToEdit();
          break;
        case 'clock':
          this.showProductionTime();
          break;
        case 'info':
          this.showMenu = true;
          break;
        case 'logo':
          this.scrollToTop();
          break;
      }
    },
    closeItemToEdit() {
      if (this.editCart) {
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
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
};
</script>
