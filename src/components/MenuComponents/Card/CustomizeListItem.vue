<template>
  <div>
    <li class='ingredients' @click="toggleActive">  
        <div class='ingredients-name' :class="[active ? 'active' : 'inactive']">
            <slot/>
        </div>
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
