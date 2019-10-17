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
