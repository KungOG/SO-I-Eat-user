<template>
  <div class='menu1'>
    <div class='menu-section'>
      <div class='menu-section-wrapper'>
        <h1>{{category.categoryName}}</h1>
        <CardText
          v-for="(item, i) in filteredItems"
          :displayIcons="displayIcons"
          :key="`filtered-items-${i}`"
          :item="item"/>
      </div>
    </div>
      <div>
        <img class="section-image" :src="urll" alt="restaurangpersonal" />
      </div>
  </div>  
</template>

<script>
import CardText from './Card/CardText.vue';
import Food0 from "@/assets/images/food0.jpg";
import Food1 from "@/assets/images/food1.jpg";
import Food2 from "@/assets/images/food2.jpg";
import Food3 from "@/assets/images/food3.jpg";
import Food4 from "@/assets/images/food4.jpg";
import Food5 from "@/assets/images/food5.jpg";
import Food6 from "@/assets/images/food6.jpg";

export default {
  name: 'menu-section',
  components: {
    CardText,
  },
  data: () => ({
    displayIcons: true,
    Food0: Food0,
    Food1: Food1,
    Food2: Food2,
    Food3: Food3,
    Food4: Food4,
    Food5: Food5,
    Food6: Food6,
  }),

  props: {
    items: {
      type: Array,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
    image: {
      type: Number,
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter(x => this.category.categoryId === x.category).sort((a, b) => ((a.productNr > b.productNr) ? 1 : -1));
    },
    urll() {
      if (this.image === 0) return Food0
      if (this.image === 1) return Food1
      if (this.image === 2) return Food2
      if (this.image === 3) return Food3
      if (this.image === 4) return Food4
      if (this.image === 5) return Food5
      if (this.image === 6) return Food6
    }  
  },
};
</script>
