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
  computed: {
    itemToEdit() {
      return this.$store.state.itemToEdit;
    },
  },
  beforeMount() {
    this.activeI = this.active;
  },
  mounted() {
    this.itemToEdit.remove.includes(this.ingredient) ? this.activeI = !this.activeI : '';
    this.itemToEdit.add.includes(this.option) ? this.activeI = !this.activeI : '';
  },
  methods: {
    toggleActive() {
      this.activeI = !this.activeI;
    },
  },
};
</script>
