<template>
    <div class='menu'>
      <MenuHeader />
      <MenuSection />
      <MenuFooter />
      <NavigationButton :imageSrc="TakeAway" :title="TakeAwayText"/>
      <NavigationButton :imageSrc="MenuIcon" :title="MenuIconText"/>
      <NavigationButton :imageSrc="Maps" :title="MapsText"/>
      <NavigationButton :imageSrc="EatHere" :title="EatHereText"/>
    </div>
</template>
<script>
import MenuHeader from '@/components/MenuComponents/MenuHeader.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';
import MenuSection from '@/components/MenuComponents/MenuSection.vue';
import NavigationButton from '@/components/NavigationButton.vue';
import TakeAway from '@/assets/icons/TakeAway.svg';
import MenuIcon from '@/assets/icons/MenuIcon.svg';
import Maps from '@/assets/icons/Maps.svg';
import EatHere from '@/assets/icons/EatHere.svg';

export default {
  name: 'menu',
  data() {
    return {
      TakeAway: TakeAway,
      TakeAwayText: 'Ta med',
      MenuIcon: MenuIcon,
      MenuIconText: 'Se Menyn',
      Maps: Maps,
      MapsText: 'Hitta hit',
      EatHere: EatHere,
      EatHereText: 'Äta här',
    }
  },
  components: {
    MenuHeader,
    MenuFooter,
    MenuSection,
    NavigationButton,
  },
};
</script>
