<template>
  <div class='card-customize'>
    <div class='ingredients-content'>
      <ul class='ingredients-list'>
        <CustomizeListItem v-for="(ingredient,i) in ingredients" :active="true" :ingredient="ingredient" :key="i">
            {{ingredient}}
        </CustomizeListItem>
        <CustomizeListItem v-for="(option,i) in menuOptions" :active="false" :option="option" :key="i+option.price">
                {{option.name}}
            <div class='ingredients-price'>
                {{option.price}}:-
            </div>
        </CustomizeListItem>    
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
}
</script>