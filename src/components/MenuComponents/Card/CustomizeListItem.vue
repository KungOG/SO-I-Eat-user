<template>
  <div>
    <li class='ingredient' :class="[activeI ? 'active' : 'inactive']" @click="toggleActive">  
        <div class='ingredient-name'>
            <slot name="itemName"/>
        </div>
        <slot name="itemPrice"/>
    </li>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeI: null,
  }),
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
    },
  },
  beforeMount() {
    this.activeI = this.active;
  },
  methods: {
    toggleActive() {
      this.activeI = !this.activeI;
    },
  },
};
</script>
