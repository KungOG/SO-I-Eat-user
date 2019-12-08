 <template>
  <div class='about'>
    <InfoHeader />
    <div class='img-about'></div>
    <div class='about-content'>
      <h4>This is an about page</h4>
      <div class='line' />
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  </div>
</template>

<script>
import InfoHeader from '@/components/InfoComponents/InfoHeader.vue';

export default {
  name: 'about',
  components: {
    InfoHeader
  }
}
</script>
