<template>
    <div
    class='menu-card'
    @click="$emit('setSelectedCard', index)"
    :class="[selectedCard === index ? 'activeCard' : '', editCart ? 'active-edit-card' : '', item.active === false ? '-inactive' : '']"
    >
    <card-image class="image"/>
    <card-text class="text"
      :displayIcons="displayIcons"
      :item="item"
      :showAddIcon="showAlternatives"
      />
    <card-alternatives v-if="showAlternatives"
      :proteinItems="item.protein"
      :showSpice="item.spice"
      />
    <card-customize 
      v-if="showCustomize"
      :ingredients="item.ingredients"
      />
    <div class="button-wrapper">
      <standard-button
        v-show="showAlternatives && !editCart"
        :buttonText="this.showCustomize ? 'stäng': 'redigera'"
        @click.native="showCustomize = !showCustomize"/>
      <standard-button
        v-show="showAlternatives && !editCart"
        buttonText="Lägg till"
        class="desktop"
        @click.native.stop = "addItemToCart"/>
    </div>
    <div v-if="item.active === false" class="inactive-card">
      <p>Går ej att beställa</p>
    </div>
  </div>
</template>

<script>
import CardImage from './Card/CardImage.vue';
import CardText from './Card/CardText.vue';
import CardAlternatives from '@/components/MenuComponents/Card/CardAlternatives.vue';
import CardCustomize from '@/components/MenuComponents/Card/CardCustomize.vue';
import StandardButton from '@/components/StandardButton.vue';

export default {
  name: 'menu-card',
  components: {
    CardText,
    CardImage,
    CardAlternatives,
    CardCustomize,
    StandardButton,
  },
  props: {
    item: {
      type: Object
    },
    displayIcons: {
      type: Boolean,
      required: true
    },
    selectedCard: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  data: () => ({
    showAlternatives: false,
    showCustomize: false,
  }),
  computed: {
    activeProtein() {
      return this.$store.state.orderDetails.protein;
    },
    activeSpice() {
      return this.$store.state.orderDetails.spice;
    },
    editCart() {
      return this.$store.state.editCart;
    },
  },
  watch: {
    selectedCard() {
      this.selectedCard !== this.index ? this.showAlternatives = false : this.showAlternatives = true;
      this.selectedCard !== this.index ? this.showCustomize = false : '';
    },
  },
  mounted() {
      this.selectedCard === this.index ? this.showAlternatives = true : this.showAlternatives = false;
      this.editCart ? this.showCustomize = true : '';
  },
  methods: {
    showAlternativesOption() {
      this.showAlternatives = true;
    },
    addItemToCart() {
      if(this.activeProtein === '' && this.activeSpice === null) {
        if(this.item.spice === false && this.item.protein.length === 0) {
          this.$store.dispatch('setOrderItemsFood', this.item);
          this.$router.push('/order');
        } else {
          this.openModal('ange dina val av huvudingredients och styrka');
        }
      } else if (this.activeSpice === null) {
        this.openModal('ange ditt val av styrka');
      } else if(this.activeProtein === '') {
        this.openModal('ange ditt val av huvudingredients');
      } else {
        this.$store.dispatch('setOrderItemsFood', this.item);
        this.$router.push('/order');
      }
      this.$emit('setSelectedCard', -1);
    },
    openModal(modalText) {
      this.$store.commit('setModalText', modalText);
      this.$store.commit('setShowTextModal', true);
      this.$store.commit('setShowModal', true);
    }
  },
};
</script>

<style lang="scss">
.menu-card {

  .image-card {
    background-size: cover;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: flex-end;

    .background-white {
      background: white;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: transform .8s ease-in-out;
  }
  
  .fade-enter, .fade-leave-to {
    transform: translateX(400px);
  }

  .expand-enter-active, .expand-leave-active {
    transition: all .8s ease-in-out 1s;
  }
  
  .expand-enter, .expand-leave-to {
    height: 0px;
    opacity: 0;
  }
}

</style>