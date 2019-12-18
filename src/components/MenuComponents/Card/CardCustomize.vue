<template>
  <div class='card-customize'>
    <div class='ingredients-content'>
      <div class='fade-gradient upper' />
      <div class='fade-gradient lower' />
      <ul class='ingredients-list'>
        <CustomizeListItem v-for="(ingredient,i) in ingredients" :active="true" :ingredient="ingredient" :key="`ingredients-${i}`" @click.native="removeIngredient(ingredient)">
          <template v-slot:itemName>
            {{ingredient}}
          </template>
        </CustomizeListItem>
        <CustomizeListItem v-for="(option,i) in menuOptions" :active="false" :option="option" :key="`menu-options-${i}`" @click.native="addOption(option)">
          <template v-slot:itemName>
              {{option.name}}
          </template>
          <template v-slot:itemPrice>
              <div class='ingredient-price'>
                {{option.price}}:-
              </div>
          </template>
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
    CustomizeListItem,
  },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  computed: {
    menuOptions() {
      return this.$store.state.menuOptions;
    },
  },
  methods: {
    removeIngredient(ingredient) {
      this.$store.commit('setRemovedIngredients', ingredient);
    },
    addOption(option) {
      this.$store.commit('setAddedOption', option);
    },
  },
};
</script>
