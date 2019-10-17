<template>
    <div class="nav-container">
        <div class="nav-item" v-for="(icon, i) in icons" :key="i" >
            <img @click="select(i)" :src="icon.icon" :class="{ selectedIcon: selected === i }" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    props: {
        icons: {
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
.nav-container {
  display: flex;
  width: auto;
  background-color: #131313;
  justify-content: space-between;
  align-items: center;
  height: 60px;  
  width: 376px;
}

.nav-item {
  margin: 20px;
}


</style>
