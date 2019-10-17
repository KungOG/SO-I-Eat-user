<template>
    <div class="scroll-container">
        <div class="nav-item" v-for="(category, i) in categories" :key="i" >
            <h5 @click="select(i)" :class="{ selectedCategory: selected === i }"> {{category}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    props: {
        categories: {
            type: Array,
            default: []
        },
        value: {
            type: String
        }
    },
    data: () => ({
        selected: null,
    }),
    methods: {
        select (value) {
            this.selected = value
            this.$emit('click', value)
        }   
    }
}
</script>

<style>
.scroll-container {
  display: flex;
  width: auto;
  background-color: #131313;
  justify-content: space-between;
  align-items: center;
  height: 70px;  
  width: 376px;
  overflow-x: auto;
  overflow-y: hidden;
  border-top: 1px solid gray;
}

::-webkit-scrollbar { 
    display: none; 
}

.nav-item {
  margin: 0 0px;
  color: white;
  display: inline-block;
}
.selectedCategory {
    color: red;
    font-size: 20px;
}
h5 {
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-family: sans-serif;
    padding: 0 20px;
}

</style>