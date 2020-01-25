<template>
    <div class='footer'>
      <img :src="TextLogotype" alt='Logotype'>
    </div>
</template>

<script>
export default {
  name: 'homefooter',
  data: () => ({
    TextLogotype: require('@/assets/icons/FullLogo.svg'),
  }),
};
</script>
