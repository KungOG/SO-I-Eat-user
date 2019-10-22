<template>
    <div class='cart'>
      <div class="cart-wrapper">
      <div class="head"> 
        <h1>Min beställning</h1>
        <h5 class="bord">Bord 5</h5>
      </div>   
        <div>
          <div class="order-items" v-for="(item, i) in orderItems" :key="i">
            <div class="dish">
              <h5>{{item.name}}</h5>
                <p>{{item.protein}}</p>
                <p v-for="(add,i) in item.add" :key="i">+ {{add}}</p>
                <p v-for="(remove, i) in item.remove" :key="i">- {{remove}}</p>
            </div>  
            <h5 class="price">{{item.price}}:-</h5>
            <img class="icon" src="@/assets/icons/delete.svg">
          </div>
        </div>
        <div class="sum">Totalsumma</div>
    </div>
    </div>
</template>

<script>
import StandardButton from '@/components/StandardButton.vue'

export default {
  components: {
    StandardButton,
  },
  data: () => ({
    orderItems: [
      {name: 'vårrullar', protein: '', add: [], remove: [], price: 59},
      {name: 'kaen kiew wan', protein: 'Kyckling', add: ['Bambuskott', 'Lök'], remove: ['Tomat'], price: 129},
      {name: 'phad thai', protein: 'Biff', add: [], remove: ['Jordnötter'], price: 99},
      {name: 'coca cola', protein: '', add: [], remove: [], price: 25},
      ],
  }),

};
</script>
