<template>
  <div>
    <img :src="require('@/assets/icons/'+ image)" alt="Välj" />
  </div>
</template>

<script>

export default {
    data () {
    return {
      image: 'AddIcon.svg'
    }
  },
}
</script>