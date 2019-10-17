<template>
<div>
  <div  :style="{backgroundImage: 'url(' + imgName + ')'}">Hello</div>
</div>
</template>

<!-- <template>
<div>
  <div  :style="{backgroundImage: 'url(' + getImgUrl(imgName) + ')'}">Hello</div>
</div>
</template> -->

<script>

export default {
    name: 'navigation',
    props: {
        imgName: {
            type: String,
        },
    },
    // methods: {
    //    getImgUrl(pic) {
    //       return require('@/assets/images/dish.png')
    //     }
    // }
}
</script>

<style>

.image-wrapper {
  width: 500px;
  height: 500px;
}


</style>