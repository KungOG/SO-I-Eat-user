<template>
  <div class='cart'>
    <div class='cart-wrapper'>
      <div class='head'> 
        <h1>Min beställning</h1>
        <h5 class='bord'>Bord 5</h5>
      </div>
      <div class='cart-order'>
        <div class='order-items' v-for="(item, i) in orderItems" :key="i">
          <h6 class="amount">3</h6>
          <div class="dish">
            <h6>{{item.name}}</h6>
            <p>{{item.protein}}</p>
            <p v-for="(add,i) in item.add" :key="i">+ {{add}}</p>
            <p v-for="(remove, i) in item.remove" :key="i">- {{remove}}</p>
          </div>  
          <h6 class='price'>{{item.price}}:-</h6>
          <img class='icon' src="@/assets/icons/delete.svg">
        </div>
      </div>
      <div class='summery'>
        <h6>Totalsumma</h6>
        <h6 class='totalAmount'>1000:-</h6>
        <StandardButton class='desktop btn' :buttonText="'Betala'"/>
      </div>
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
