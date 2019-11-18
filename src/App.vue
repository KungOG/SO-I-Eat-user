<template>
  <div id="app">
    <navigation-bar class="mobile"/>
    <div id="nav">
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <h1>Install!</h1>
      </a>
    </div>
    <modal v-if="showTextModal === false" :showAbort="!showAbort">
      <h5>{{modalHeader}}</h5>
      <p>{{modalText}}</p>
    </modal>
    <modal v-if="orderState === 'eatHere'" :showAbort="showAbort" @sendTableInput="sendTableInput" >
      <h5>Vilket bord sitter du vid?</h5>
      <input
        v-model="tableInput"
        type="text"
        maxlength="2"
        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" />
    </modal>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    NavigationBar,
    Modal
  },
  data: () => ({
    installBtn: 'none',
    installer: undefined,
    showTextModal: true,
    showInputModal: false,
    modalHeader: 'Vill du verkligen',
    modalText: 'göra en beställning?',
    showAbort: true,
    tableInput: '',
  }),
  computed: {
    orderState() {
      return this.$store.state.orderState;
    },
  },
  created() {
    let installPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = 'block';
    });

    this.installer = () => {
      this.installBtn = 'none';
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === 'accepted') {
          console.log('Install accepted!');
        } else {
          console.log('Install denied!');
        }
      });
    };
  },
  methods: {
    sendTableInput() {
      console.log('kdjsl')
      this.$store.commit('setTableInput', this.tableInput);
      this.$store.commit('setOrderState');
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/app.scss';
</style>
