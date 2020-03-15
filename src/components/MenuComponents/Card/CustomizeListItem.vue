<template>
  <li class='ingredient' :class="[activeI ? 'active':'inactive']" @click="toggleActive">
      <div class='ingredient-name'>
          <slot name="itemName"/>
      </div>
      <slot name="itemPrice"/>
  </li>
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
    if (this.itemToEdit && this.option) {
      this.itemToEdit.remove.includes(this.ingredient) ? this.activeI = !this.activeI : '';
      const index = this.itemToEdit.add.findIndex(x => x.productName === this.option.productName);
      index !== -1 ? this.activeI = !this.activeI : '';
    }
  },
  methods: {
    toggleActive() {
      this.activeI = !this.activeI;
    },
  },
};
</script>
