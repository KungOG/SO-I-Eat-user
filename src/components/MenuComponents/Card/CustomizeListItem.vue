<template>
  <div class='customize-item'>
    <li v-if="show" class='ingredients' @click="toggleActive">   
      <div class='ingredients-name' :class="[active ? '-active' : '', '-inactive']">
        {{ingredient}}
      </div>
    </li>
    
    <li class='ingredients' @click="toggleActive">
      <div class='ingredients-name' :class="[active ? '-active' : '', '-inactive']">
        {{option.name}}
      </div>
      <div class='ingredients-price'>
        {{option.price}}:-
      </div>
    </li>
  </div>
</template>

<script>
export default {

  props: {
     option: {
         type: Object,
         required: true,
     },
     ingredient: {
         type: Array,
         required: true,
     }
  }
}
</script>
