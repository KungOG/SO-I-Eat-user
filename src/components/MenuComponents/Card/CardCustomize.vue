<template>
  <div class='card-customize'>
    <div class='ingredients-content'>
      <ul class='ingredients-list'>
        <CustomizeListItem v-for="(ingredient,i) in ingredients" :ingredient="ingredient" :key="i">
             
             {{ingredient}}
            
        </CustomizeListItem>

        <!-- <CustomizeListItem v-for="(option,i) in menuOptions" :option="option" :key="i" /> -->
      </ul>
    </div>
    <div class='filler'/>
  </div>
</template>

<script>
import CustomizeListItem from './CustomizeListItem.vue';

export default {
  components: {
    CustomizeListItem
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    }
  },
  computed: {
    menuOptions () {
      return this.$store.state.menuOptions;
    }
  },
  methods: {
      toggleActive() {
        console.log(this.active);
        this.active = !this.active;
      }
  }
}
</script>