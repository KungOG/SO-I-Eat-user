<template>
    <div class="side-navigation">
        <div class="icon-wrapper">
            <img :src="require('@/assets/icons/' + icons.logo)" alt="hem">
            <img :src="require('@/assets/icons/' + icons.info)" alt="info">
        </div>
        <div>
            <ul>
                <li v-for="(category, i) in categories" :key="i">
                    <h3>{{category}}</h3>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        icons: {
            logo: 'logga.svg',
            info: 'Info.svg',
        },
    }),
};
</script>

<style lang="scss">
    .side-navigation {
        color: white;
        width: 30%;

        .icon-wrapper {
            display: flex;
            justify-content: space-between;
            padding: 20px;
        }
    }
</style>