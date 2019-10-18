<template>
  <div>
    <li class='ingredients' @click="toggleActive">  
        <div class='ingredients-name' :class="[active ? 'active' : 'inactive']">
            <slot name="itemName"/>
        </div>
            <slot name="itemPrice"/>
    </li>
  </div>
</template>

<script>
export default {
    props: {
        option: {
            type: Object,
        },
        ingredient: {
            type: String,
        },
        active: {
            type: Boolean,
            required: true,
        }
    },
      methods: {
      toggleActive() {
        this.active = !this.active;
      }
  }
}
</script>
