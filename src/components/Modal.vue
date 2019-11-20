<template>
  <div class='modal'>
    <section class='modal-wrapper'>
      <section class="modal-content">
        <div class='content' v-if="showInputModal">
          <h5>Vilket bord sitter du vid?</h5>
          <input
            v-model="tableInput"
            type="text"
            maxlength="2"
            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
        </div>
        <div class='content' v-if="showTextModal">
          <h5>{{modalText}}</h5>
        </div>
      </section>
      <section class='modal-buttons'>
        <StandardButton @click.native="modalAction" />
      </section>
      <img class='modal-cross-icon' :src="CloseDown" />
    </section>
    <div class='modal-close-button' @click="cancelModal" />
  </div>
</template>

<script>
import StandardButton from './StandardButton.vue';
import CloseDown from '@/assets/icons/WhiteCross.svg';

export default {
  name: 'modal',
  components: {
    StandardButton,
  },
  props: {
    showAbort: {
      type: Boolean,
    },
  },
  data: () => ({
    tableInput: '',
    CloseDown: CloseDown,
  }),
  computed: {
    modalText() {
      return this.$store.state.modalText;
    },
    showTextModal() {
      return this.$store.state.showTextModal;
    },
    showInputModal() {
      return this.$store.state.showInputModal;
    },
  },
  methods: {
    modalAction() {
      this.$store.commit('setTableInput', this.tableInput);
      this.$store.commit('setShowInputModal', false);
      this.$store.commit('setShowTextModal', false);
      this.$store.commit('setShowModal', false);
    },
    cancelModal() {
      this.$store.commit('setShowInputModal', false);
      this.$store.commit('setShowModal', false);
      this.$router.push('/');
    },
  },
};
</script>
