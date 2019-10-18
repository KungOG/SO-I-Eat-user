<template>
  <div>
    <li class='ingredient' :class="[active ? 'active' : 'inactive']" @click="toggleActive">  
        <div class='ingredient-name'>
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
