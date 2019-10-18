<template>
  <div>
    <li class='ingredients' @click="toggleActive">  
                    <div class='ingredients-name' :class="[active ? 'active' : '', 'inactive']">
             <slot/>
            </div>

    </li>
   

    <!-- <li class='ingredients' @click="toggleActive">
      <div class='ingredients-name' :class="[active ? 'active' : '', 'inactive']">
        {{option.name}}
      </div>
      <div class='ingredients-price'>
        {{option.price}}:-
      </div>
    </li> -->
  </div>
</template>

<script>
export default {
    props: {
        option: {
            type: Object,
            required: false,
        },
        ingredient: {
            type: String,
            required: true,
        }
    },
    data () {
        return {
            active: true,
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
