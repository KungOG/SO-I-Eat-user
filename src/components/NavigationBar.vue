<template>
  <div
    class="nav-container"
    :class="[$route.path === '/' &&
    !showMenu ? 'transparent' : '', $route.path === '/' ? 'home' : '', showMenu ? '-active' : '']"
  >
    <div class="nav-item" v-for="(icon, i) in iconsMenu" :key="i" v-if="$route.path === '/'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div class="nav-item" v-for="(icon, i) in iconsOrder" :key="i" v-if="$route.path === '/order'">
      <router-link :to="icon.urlTo" active-class="route-active">
        <img
          :src="icon.icon"
          @click="clicked(icon.name)"
          :class="selected === icon.name && icon.name !== 'clock' ? 'active-icon' : '' "
        />
      </router-link>
    </div>
    <div
      class="nav-item"
      v-for="(icon, i) in iconsInfo"
      :key="i"
      v-if="$route.path === '/info' || $route.path === '/contact' || $route.path === '/terms' || $route.path === '/about'"
    >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div
      class="nav-item"
      v-for="(icon, i) in iconsOrderItem"
      :key="i"
      v-if="$route.path.substring(0, 11) === '/orderitem/'"
    >
      <router-link :to="icon.urlTo" active-class="route-active">
        <img :src="icon.icon" @click="clicked(icon.name)" />
      </router-link>
    </div>
    <div v-show="showMenu" class="info-menu">
      <div class="icon-wrapper">
        <img :src="require('@/assets/icons/' + imgUrl)" @click="showMenu = false" />
      </div>
      <div class="info-menu-text" @click="showMenu = false">
        <router-link to="/contact">
          <h2>Kontakt</h2>
        </router-link>
        <router-link to="/about">
          <h2>Om oss</h2>
        </router-link>
        <!-- <router-link to="/terms">
          <h2>Villkor</h2>
        </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EatHere from "@/assets/icons/EatHere.svg";
import EatHereActive from "@/assets/icons/EatHereActive.svg";
import TakeAway from "@/assets/icons/TakeAway.svg";
import TakeAwayActive from "@/assets/icons/TakeAwayActive.svg";
import Clock from "@/assets/icons/Clock.svg";
import Delete from "@/assets/icons/WhiteCross.svg";
import Info from "@/assets/icons/Info.svg";
import Logo from "@/assets/icons/LogoNoText.svg";
import FullLogo from "@/assets/icons/FullLogo.svg";
import ReturnArrow from "@/assets/icons/ReturnArrow.svg";

export default {
  name: "navigation",
  data: () => ({
    selected: null,
    iconsMenu: [
      { icon: FullLogo, name: "logo", urlTo: "/" },
      { icon: Info, name: "info", urlTo: "" }
    ],
    iconsOrder: [
      { icon: Logo, urlTo: "/" },
      { icon: TakeAway, name: "takeAway", urlTo: "/order" },
      {
        icon: EatHere,
        active: EatHereActive,
        name: "eatHere",
        urlTo: "/order"
      },
      { icon: Clock, name: "clock", urlTo: "" }
    ],
    iconsOrderItem: [{ icon: Delete, name: "delete", urlTo: "/order" }],
    iconsInfo: [
      { icon: ReturnArrow, urlTo: "/" },
      { icon: Info, name: "info", urlTo: "" }
    ],
    showMenu: false,
    imgUrl: "WhiteCross.svg"
  }),
  computed: {
    editCart() {
      return this.$store.state.editCart;
    },
    table() {
      return this.$store.state.order.table;
    }
  },
  beforeMount() {
    if (this.table === "take away") {
      this.iconsOrder[1].icon = TakeAwayActive;
    } else {
      this.iconsOrder[1].icon = TakeAway;
    }
    if (this.table !== "take away") {
      this.iconsOrder[2].icon = EatHereActive;
    } else {
      this.iconsOrder[2].icon = EatHere;
    }
  },
  watch: {
    table() {
      if (this.table === "take away") {
        this.iconsOrder[1].icon = TakeAwayActive;
      } else {
        this.iconsOrder[1].icon = TakeAway;
      }
      if (this.table !== "take away") {
        this.iconsOrder[2].icon = EatHereActive;
      } else {
        this.iconsOrder[2].icon = EatHere;
      }
    }
  },
  methods: {
    clicked(icon) {
      this.selected = icon;
      switch (icon) {
        case "eatHere":
          this.$store.commit("setShowModal", true);
          this.$store.commit("setShowInputModal", true);
          break;
        case "takeAway":
          this.$store.commit("setTableInput", "take away");
          break;
        case "delete":
          this.closeItemToEdit();
          break;
        case "clock":
          this.$store.dispatch("getProductionTime");
          break;
        case "info":
          this.showMenu = true;
          break;
        case "logo":
          this.$nextTick(() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          );
          break;
        default:
          return null;
      }
    },
    closeItemToEdit() {
      if (this.editCart) {
        this.$store.commit("editCart", false);
        this.$store.commit("setShowCart", true);
        this.$store.commit("resetItemToEdit");
        this.iconsOrderItem[0].urlTo = "/orderitem/cart";
      } else {
        this.iconsOrderItem[0].urlTo = "/order";
      }
    }
  }
};
</script>
