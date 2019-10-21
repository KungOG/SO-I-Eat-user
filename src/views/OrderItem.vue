<template>
    <div>
        <menu-card :item="item" :displayIcons="displayIcons" :selectedCard="1" :index="1"/>
        <menu-footer class="mobile"/>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuComponents/MenuCard.vue';
import MenuFooter from '@/components/MenuComponents/MenuFooter.vue';

export default {
    components: {
        MenuCard,
        MenuFooter,
    },
    data: () => ({
        displayIcons: false,
    }),
    computed: {
        item () {
            return this.$store.getters.getOrderItem(this.$route.params.id)
        },    
    }
    
}
</script>