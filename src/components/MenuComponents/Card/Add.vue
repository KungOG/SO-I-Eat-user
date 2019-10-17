<template>
  <div>
    <img :src=addIconUrl alt="Välj" />
  </div>
</template>

<script>
export default {
    data () {
    return {
      addIconUrl: require('@/assets/icons/AddIcon.svg')
    }
  },
}
</script>